from pathlib import Path
import sys
n=int(sys.argv[1]);m=int(sys.argv[2])
s='''import { Block } from "foldkit";
import { Schema, Tuple } from "effect";
import { defineMessageUnion } from "foldkit/message";
const Model = Schema.Struct({ count: Schema.Number });
const Message = defineMessageUnion({ Inc: {} });
const Def = Block.makeDefinition("Child", { Model, Message });
const C = Def.makeComposition();
const prepare = () => C.prepareBlock({ init:C.makeInit(() => ({model:{count:0}})), update:C.makeUpdate({Inc: model => ({model:{count:model.count+1}})}), operations:{ inc: () => Tuple.make(Message.Inc()) } });
const Child: Block.FromAssemblyWithoutViewOrOutMessage<typeof Model, typeof prepare> = Block.assemble(prepare);
const P = Block.makeDefinition("Root", { Model: Schema.Struct({\n'''
s+=''.join(f'b{i}: Child.Model,\n' for i in range(n))+'}), Message: defineMessageUnion({\n'
s+=''.join(f'M{i}: {{}},\n' for i in range(m))+'}) });\n'
s+=''.join(f'const b{i}=P.makeBinding(Child, {{field:"b{i}", init:{{contextToArgs:()=>Tuple.make()}}}});\n' for i in range(n))
s+='const Root=P.makeComposition({ bindings:['+','.join('b'+str(i) for i in range(n))+'] });\n'
s+='const update=Root.makeUpdate({\n'+''.join(f'M{i}: model => b{i%n}.inc()(model),\n' for i in range(m))+'});\nexport {update};\n'
Path('stress/generated.ts').write_text(s)
