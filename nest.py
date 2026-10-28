from pathlib import Path
s='''import { Block } from "foldkit";
import { Schema, Tuple } from "effect";
import * as Update from "foldkit/update";
import { defineMessageUnion } from "foldkit/message";
const M0 = Schema.Struct({count: Schema.Number});
const E0 = defineMessageUnion({Inc:{}});
const D0 = Block.makeDefinition("L0", {Model:M0, Message:E0});
const C0 = D0.makeComposition();
const prep0 = () => C0.prepareBlock({init:C0.makeInit(()=>({model:{count:0}})),update:C0.makeUpdate({Inc:model=>({model:{count:model.count+1}})}),operations:{inc:()=>Tuple.make(E0.Inc())}});
const B0: Block.FromAssemblyWithoutViewOrOutMessage<typeof M0,typeof prep0> = Block.assemble(prep0);
'''
for level in range(1,9):
 n=6
 s+=f'const M{level}=Schema.Struct({{'+','.join(f'f{i}:B{level-1}.Model' for i in range(n))+'});\n'
 s+=f'const E{level}=defineMessageUnion({{Inc:{{}}}});\nconst D{level}=Block.makeDefinition("L{level}",{{Model:M{level},Message:E{level}}});\n'
 for i in range(n):s+=f'const b{level}_{i}=D{level}.makeBinding(B{level-1},{{field:"f{i}",init:{{contextToArgs:()=>Tuple.make()}}}});\n'
 s+=f'const C{level}=D{level}.makeComposition({{bindings:['+','.join(f'b{level}_{i}' for i in range(n))+']});\n'
 s+=f'const prep{level}=()=>C{level}.prepareBlock({{init:C{level}.makeInit(()=>({{model:{{}}}})),update:C{level}.makeUpdate({{Inc:model=>Update.combineSteps(['+','.join(f'b{level}_{i}.inc()' for i in range(n))+f'])(model)}}),operations:{{inc:()=>Tuple.make(E{level}.Inc())}}}});\n'
 s+=f'const B{level}:Block.FromAssemblyWithoutViewOrOutMessage<typeof M{level},typeof prep{level}>=Block.assemble(prep{level});\n'
s+='export {B8};\n';Path('src.ts').write_text(s)
