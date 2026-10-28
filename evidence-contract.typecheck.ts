// Compile-only regression for the pinned preview declaration correction.
// This deliberately inspects the pinned internal contract; it is not runtime API.
// Native wildcard `any` is copied literally below; other `any` cases verify
// rejection of erased evidence, never production casts or error suppression.
import type { RegistrationEvidenceTypeId } from "./node_modules/foldkit/dist/update/update.js"
import type {
  Commands,
  RegistrationEvidence,
  Return,
  ReturnWithRegistrationEvidence,
  DeferredUpdateEvidence,
  DeferredResultEvidence,
  ResultRecipe,
  DeferredResultEvidenceOf as NewDeferredResultEvidenceOf,
  ResultEvidenceChannelOf as NewResultEvidenceChannelOf,
  RegistrationEvidenceOf as NewRegistrationEvidenceOf,
  ValidateConcreteResultEvidence as NewValidateConcreteResultEvidence
} from "./node_modules/foldkit/dist/update/update.js"

// Literal upstream definitions; native wildcard any is preserved in these copies.
// The fixture introduces any as data only in explicitly invalid negative cases.
type OldAnyDeferredResultEvidence = DeferredResultEvidence<any>
type OldConcreteRegistrationEvidence<Evidence> = 0 extends 1 & Evidence
  ? never
  : unknown extends Evidence
    ? never
    : Evidence
type OldDirectResultEvidenceChannelOf<Value> = Value extends unknown
  ? typeof RegistrationEvidenceTypeId extends keyof Value
    ? Value extends Readonly<{
        [RegistrationEvidenceTypeId]?: infer EvidenceFunction
      }>
      ? [NonNullable<EvidenceFunction>] extends [never]
        ? never
        : NonNullable<EvidenceFunction> extends () => infer Evidence
          ? Evidence
          : never
      : never
    : never
  : never
/** @internal Extracts the unfiltered graph evidence retained by an update result. */
export type OldResultEvidenceChannelOf<Value> =
  Value extends DeferredUpdateEvidence<any, any, any, infer Evidence>
    ? Evidence
    :
        | OldDirectResultEvidenceChannelOf<Value>
        | (Value extends unknown
            ? "commands" extends keyof Value
              ? Value extends Readonly<{
                  commands?: infer CommandValues
                }>
                ? OldDirectResultEvidenceChannelOf<NonNullable<CommandValues>>
                : never
              : never
            : never)
type OldInvalidResultEvidence<Value> =
  OldResultEvidenceChannelOf<Value> extends infer Evidence
    ? 0 extends 1 & Evidence
      ? Evidence
      : unknown extends Evidence
        ? Evidence
        : never
    : never
/** @internal Rejects update results whose graph evidence was widened away. */
export type OldValidateConcreteResultEvidence<Value> = [
  OldInvalidResultEvidence<Value>
] extends [never]
  ? unknown
  : Readonly<{
      "Composition results must preserve concrete Binding graph evidence": OldInvalidResultEvidence<Value>
    }>
/** @internal Extracts graph obligations retained separately from registration. */
export type OldDeferredResultEvidenceOf<Value> = Extract<
  OldConcreteRegistrationEvidence<OldResultEvidenceChannelOf<Value>>,
  OldAnyDeferredResultEvidence
>
type OldConcreteRegistrationPart<Evidence> =
  Evidence extends OldAnyDeferredResultEvidence
    ? never
    : OldConcreteRegistrationEvidence<Evidence>
/** Extracts child Binding registration evidence retained by an update result or
 * its Commands. A raw Binding operation reports its direct child registration;
 * policy-produced registrations remain an opaque obligation until a completed
 * Composition resolves them against its registered graph. */
export type OldRegistrationEvidenceOf<Value> =
  Value extends DeferredUpdateEvidence<any, any, any, infer Evidence>
    ? OldConcreteRegistrationPart<Evidence>
    :
        | OldConcreteRegistrationPart<OldDirectResultEvidenceChannelOf<Value>>
        | (Value extends unknown
            ? "commands" extends keyof Value
              ? Value extends Readonly<{
                  commands?: infer CommandValues
                }>
                ? OldConcreteRegistrationPart<
                    OldDirectResultEvidenceChannelOf<NonNullable<CommandValues>>
                  >
                : never
              : never
            : never)

type Equal<A, B> =
  (<T>() => T extends A ? 1 : 2) extends <T>() => T extends B ? 1 : 2
    ? true
    : false
type Assert<T extends true> = T
type Model = { readonly id: string }
type Message = { readonly _tag: "Done" }
type EvidenceA = { readonly binding: "A" }
type EvidenceB = { readonly binding: "B" }
type CommandsA = Commands<Message> & RegistrationEvidence<EvidenceA>
type CommandsB = Commands<Message> & RegistrationEvidence<EvidenceB>
type Obligation = DeferredResultEvidence<EvidenceB>

type GenericResult<M, C> = { readonly model: M; readonly commands?: C }
type MutableGenericResult<M, C> = { model: M; commands?: C }
type Cases = {
  stringIndexOptional: Partial<Record<string, CommandsA>>
  stringIndexNullable: { readonly [key: string]: CommandsA | undefined | null }
  stringIndexDirect: {
    readonly [key: string]: CommandsA
  } & RegistrationEvidence<EvidenceB>
  stringIndexComposite: { readonly [key: string]: CommandsA } & {
    readonly commands?: CommandsA
  }
  stringIndexCompositeOther: {
    readonly [key: string]: CommandsA | undefined
  } & { readonly commands?: CommandsA | undefined }
  stringIndexMappedRequired: Required<Partial<Record<string, CommandsA>>>
  stringIndexUnion:
    | Record<string, CommandsA>
    | { readonly commands?: CommandsB }
  templateCommandIndex: { readonly [key: `command${string}`]: CommandsA }
  templateCommandsIndex: { readonly [key: `commands${string}`]: CommandsA }
  templateCommandsOptional: Partial<Record<`commands${string}`, CommandsA>>
  templateCommandsComposite: Record<`commands${string}`, CommandsA> & {
    readonly commands?: CommandsA
  }
  templateUnrelatedIndex: { readonly [key: `other${string}`]: CommandsA }
  numericIndex: { readonly [key: number]: CommandsA }
  numericOptionalIndex: Partial<Record<number, CommandsA>>
  numericAndCommandsOptional: {
    readonly [key: number]: CommandsA
    readonly commands?: CommandsB
  }
  numericAndCommandsRequired: {
    readonly [key: number]: CommandsA
    readonly commands: CommandsB
  }
  symbolIndex: { readonly [key: symbol]: CommandsA }
  tupleCommandsOptional: readonly [Message] & { readonly commands?: CommandsA }
  tupleCommandsRequired: readonly [Message] & { readonly commands: CommandsA }
  tupleCommandsReadonly: Readonly<[Message] & { commands?: CommandsA }>
  arrayCommandsOptional: ReadonlyArray<Message> & {
    readonly commands?: CommandsA
  }
  arrayCommandsRequired: ReadonlyArray<Message> & {
    readonly commands: CommandsA
  }
  genericReadonlyModel: GenericResult<Readonly<Model>, CommandsA>
  genericReadonlyNestedModel: GenericResult<
    Readonly<{ child: Model; snapshots: ReadonlyArray<Model> }>,
    CommandsA | CommandsB
  >
  genericReadonlyReturn: Readonly<MutableGenericResult<Model, CommandsA>>
  genericRequiredReturn: Required<GenericResult<Model, CommandsA>>
  genericIntersection: GenericResult<Model, CommandsA> &
    RegistrationEvidence<EvidenceB>
  callableCommands: (() => Model) & { readonly commands?: CommandsA }
  constructableCommands: (new () => Model) & { readonly commands?: CommandsA }
  evidenceSymbolRequired: {
    readonly [RegistrationEvidenceTypeId]: () => EvidenceA
    readonly commands?: CommandsB
  }
  commandsEvidenceRequired: {
    readonly commands?: Commands<Message> & {
      readonly [RegistrationEvidenceTypeId]: () => EvidenceA
    }
  }
  negativeIndexAny: Record<string, any>
  negativeIndexUnknown: Record<string, unknown>
  negativeTemplateAny: Record<`commands${string}`, any>
  negativeOptionalAny: Partial<{ commands: any }>
  negativeOptionalUnknown: Partial<{ commands: unknown }>

  nativeReturn: Return<Model, Message>
  nativeRegistered: ReturnWithRegistrationEvidence<
    Model,
    Message,
    never,
    never,
    EvidenceA
  >
  nativeRegisteredUnion:
    | ReturnWithRegistrationEvidence<Model, Message, never, never, EvidenceA>
    | ReturnWithRegistrationEvidence<Model, Message, never, never, EvidenceB>
  commandsOnlyOptional: { readonly model: Model; readonly commands?: CommandsA }
  commandsOnlyRequired: { readonly model: Model; readonly commands: CommandsA }
  commandsRequiredUnion: { readonly commands: CommandsA | CommandsB }
  commandsOptionalUnion: {
    readonly commands?: CommandsA | CommandsB | undefined
  }
  commandsNullable: { readonly commands: CommandsA | null | undefined }
  commandsNull: { readonly commands: null }
  commandsUndefined: { readonly commands?: undefined }
  commandsNever: { readonly commands: never }
  commandsOptionalNever: { readonly commands?: never }
  commandsEmptyArray: { readonly commands: readonly [] }
  commandsEmptyObject: { readonly commands: {} }
  noCommands: { readonly model: Model }
  empty: {}
  never: never
  nullableValue: { readonly commands: CommandsA } | null | undefined
  disjointUnion:
    | { readonly commands: CommandsA }
    | { readonly other: EvidenceB }
  directOnly: RegistrationEvidence<EvidenceA>
  directAndCommandDistinct: RegistrationEvidence<EvidenceA> & {
    readonly commands?: CommandsB
  }
  directAndCommandUnion: RegistrationEvidence<EvidenceA> & {
    readonly commands?: CommandsA | CommandsB
  }
  directAndCommandIntersection: RegistrationEvidence<EvidenceA> & {
    readonly commands: CommandsA & CommandsB
  }
  intersectionRequiredOptional: { readonly commands?: CommandsA } & {
    readonly commands: CommandsA
  }
  intersectionNested: { readonly model: Model } & {
    readonly commands?: CommandsA
  } & { readonly extra: string }
  stringIndex: { readonly [key: string]: CommandsA }
  stringIndexWithCommands: {
    readonly [key: string]: CommandsA
    readonly commands: CommandsA
  }
  deferred: DeferredUpdateEvidence<Model, Message, never, EvidenceA>
  deferredWithCommand: DeferredUpdateEvidence<
    Model,
    Message,
    never,
    EvidenceA
  > & { readonly commands: CommandsB }
  deferredObligation: DeferredUpdateEvidence<Model, Message, never, Obligation>
  recipe: ResultRecipe<Model, Message, never, never, EvidenceA>
  recipeUnion:
    | ResultRecipe<Model, Message, never, never, EvidenceA>
    | { readonly commands: CommandsB }
  directObligation: RegistrationEvidence<Obligation>
  commandsObligation: {
    readonly commands?: Commands<Message> & RegistrationEvidence<Obligation>
  }
  negativeUnknownValue: unknown
  negativeAnyValue: any
  negativeUnknownEvidence: RegistrationEvidence<unknown>
  negativeAnyEvidence: RegistrationEvidence<any>
  negativeUnknownCommandEvidence: {
    readonly commands: Commands<Message> & RegistrationEvidence<unknown>
  }
  negativeAnyCommandEvidence: {
    readonly commands: Commands<Message> & RegistrationEvidence<any>
  }
  negativeUnknownCommands: { readonly commands: unknown }
  negativeAnyCommands: { readonly commands: any }
  negativeUnknownDeferredEvidence: DeferredUpdateEvidence<
    Model,
    Message,
    never,
    unknown
  >
  negativeAnyDeferredEvidence: DeferredUpdateEvidence<
    Model,
    Message,
    never,
    any
  >
}
// Evaluate all four metadata contracts for every named case. A failure carries
// its case/channel name, while new edge cases need only one entry above.
type ComparisonResults<Value> = {
  result: Equal<
    OldResultEvidenceChannelOf<Value>,
    NewResultEvidenceChannelOf<Value>
  >
  registration: Equal<
    OldRegistrationEvidenceOf<Value>,
    NewRegistrationEvidenceOf<Value>
  >
  validation: Equal<
    OldValidateConcreteResultEvidence<Value>,
    NewValidateConcreteResultEvidence<Value>
  >
  deferred: Equal<
    OldDeferredResultEvidenceOf<Value>,
    NewDeferredResultEvidenceOf<Value>
  >
}
type FailingChannels<Value> = {
  [
    Channel in keyof ComparisonResults<Value>
  ]: ComparisonResults<Value>[Channel] extends true ? never : Channel
}[keyof ComparisonResults<Value>]
export type EvidenceContractFailures = {
  [Name in keyof Cases]: `${Name}:${FailingChannels<Cases[Name]>}`
}[keyof Cases]
export type AllEvidenceContractsMatch = Assert<
  Equal<EvidenceContractFailures, never>
>

// Additional semantic expectations prevent equal-but-empty extraction from passing.
export type KeepsDirectAndCommands = Assert<
  Equal<
    NewRegistrationEvidenceOf<Cases["directAndCommandDistinct"]>,
    EvidenceA | EvidenceB
  >
>
export type KeepsDeferredOpaque = Assert<
  Equal<NewResultEvidenceChannelOf<Cases["deferredObligation"]>, Obligation>
>
export type ExcludesDeferredFromRegistration = Assert<
  Equal<NewRegistrationEvidenceOf<Cases["deferredObligation"]>, never>
>
export type RejectsUnknownEvidence = Assert<
  Equal<
    NewValidateConcreteResultEvidence<Cases["negativeUnknownEvidence"]>,
    Readonly<{
      "Composition results must preserve concrete Binding graph evidence": unknown
    }>
  >
>
export type RejectsAnyEvidence = Assert<
  Equal<
    NewValidateConcreteResultEvidence<Cases["negativeAnyEvidence"]>,
    Readonly<{
      "Composition results must preserve concrete Binding graph evidence": any
    }>
  >
>
