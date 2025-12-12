
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model TravelPlan
 * 
 */
export type TravelPlan = $Result.DefaultSelection<Prisma.$TravelPlanPayload>
/**
 * Model TravelPlanParticipant
 * 
 */
export type TravelPlanParticipant = $Result.DefaultSelection<Prisma.$TravelPlanParticipantPayload>
/**
 * Model TravelPlanJoinRequest
 * 
 */
export type TravelPlanJoinRequest = $Result.DefaultSelection<Prisma.$TravelPlanJoinRequestPayload>
/**
 * Model Review
 * 
 */
export type Review = $Result.DefaultSelection<Prisma.$ReviewPayload>
/**
 * Model Payment
 * 
 */
export type Payment = $Result.DefaultSelection<Prisma.$PaymentPayload>
/**
 * Model Subscription
 * 
 */
export type Subscription = $Result.DefaultSelection<Prisma.$SubscriptionPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  SUPER_ADMIN: 'SUPER_ADMIN',
  ADMIN: 'ADMIN',
  USER: 'USER'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const UserStatus: {
  ACTIVE: 'ACTIVE',
  BLOCKED: 'BLOCKED',
  DELETED: 'DELETED'
};

export type UserStatus = (typeof UserStatus)[keyof typeof UserStatus]


export const Gender: {
  MALE: 'MALE',
  FEMALE: 'FEMALE',
  OTHERS: 'OTHERS'
};

export type Gender = (typeof Gender)[keyof typeof Gender]


export const TravelType: {
  SOLO: 'SOLO',
  FAMILY: 'FAMILY',
  FRIENDS: 'FRIENDS'
};

export type TravelType = (typeof TravelType)[keyof typeof TravelType]


export const PaymentStatus: {
  PENDING: 'PENDING',
  SUCCESS: 'SUCCESS',
  FAILED: 'FAILED'
};

export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus]


export const JoinStatus: {
  PENDING: 'PENDING',
  ACCEPTED: 'ACCEPTED',
  REJECTED: 'REJECTED',
  CANCELLED: 'CANCELLED',
  COMPLETED: 'COMPLETED'
};

export type JoinStatus = (typeof JoinStatus)[keyof typeof JoinStatus]


export const SubscriptionStatus: {
  active: 'active',
  past_due: 'past_due',
  canceled: 'canceled',
  incomplete: 'incomplete'
};

export type SubscriptionStatus = (typeof SubscriptionStatus)[keyof typeof SubscriptionStatus]


export const PlanType: {
  monthly: 'monthly',
  yearly: 'yearly'
};

export type PlanType = (typeof PlanType)[keyof typeof PlanType]


export const ParticipantStatus: {
  PENDING: 'PENDING',
  ONGOING: 'ONGOING',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED'
};

export type ParticipantStatus = (typeof ParticipantStatus)[keyof typeof ParticipantStatus]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type UserStatus = $Enums.UserStatus

export const UserStatus: typeof $Enums.UserStatus

export type Gender = $Enums.Gender

export const Gender: typeof $Enums.Gender

export type TravelType = $Enums.TravelType

export const TravelType: typeof $Enums.TravelType

export type PaymentStatus = $Enums.PaymentStatus

export const PaymentStatus: typeof $Enums.PaymentStatus

export type JoinStatus = $Enums.JoinStatus

export const JoinStatus: typeof $Enums.JoinStatus

export type SubscriptionStatus = $Enums.SubscriptionStatus

export const SubscriptionStatus: typeof $Enums.SubscriptionStatus

export type PlanType = $Enums.PlanType

export const PlanType: typeof $Enums.PlanType

export type ParticipantStatus = $Enums.ParticipantStatus

export const ParticipantStatus: typeof $Enums.ParticipantStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.travelPlan`: Exposes CRUD operations for the **TravelPlan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TravelPlans
    * const travelPlans = await prisma.travelPlan.findMany()
    * ```
    */
  get travelPlan(): Prisma.TravelPlanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.travelPlanParticipant`: Exposes CRUD operations for the **TravelPlanParticipant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TravelPlanParticipants
    * const travelPlanParticipants = await prisma.travelPlanParticipant.findMany()
    * ```
    */
  get travelPlanParticipant(): Prisma.TravelPlanParticipantDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.travelPlanJoinRequest`: Exposes CRUD operations for the **TravelPlanJoinRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TravelPlanJoinRequests
    * const travelPlanJoinRequests = await prisma.travelPlanJoinRequest.findMany()
    * ```
    */
  get travelPlanJoinRequest(): Prisma.TravelPlanJoinRequestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.review`: Exposes CRUD operations for the **Review** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.review.findMany()
    * ```
    */
  get review(): Prisma.ReviewDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.PaymentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subscription`: Exposes CRUD operations for the **Subscription** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subscriptions
    * const subscriptions = await prisma.subscription.findMany()
    * ```
    */
  get subscription(): Prisma.SubscriptionDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.1.0
   * Query Engine version: ab635e6b9d606fa5c8fb8b1a7f909c3c3c1c98ba
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    TravelPlan: 'TravelPlan',
    TravelPlanParticipant: 'TravelPlanParticipant',
    TravelPlanJoinRequest: 'TravelPlanJoinRequest',
    Review: 'Review',
    Payment: 'Payment',
    Subscription: 'Subscription'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "travelPlan" | "travelPlanParticipant" | "travelPlanJoinRequest" | "review" | "payment" | "subscription"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      TravelPlan: {
        payload: Prisma.$TravelPlanPayload<ExtArgs>
        fields: Prisma.TravelPlanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TravelPlanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelPlanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TravelPlanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelPlanPayload>
          }
          findFirst: {
            args: Prisma.TravelPlanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelPlanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TravelPlanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelPlanPayload>
          }
          findMany: {
            args: Prisma.TravelPlanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelPlanPayload>[]
          }
          create: {
            args: Prisma.TravelPlanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelPlanPayload>
          }
          createMany: {
            args: Prisma.TravelPlanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TravelPlanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelPlanPayload>[]
          }
          delete: {
            args: Prisma.TravelPlanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelPlanPayload>
          }
          update: {
            args: Prisma.TravelPlanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelPlanPayload>
          }
          deleteMany: {
            args: Prisma.TravelPlanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TravelPlanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TravelPlanUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelPlanPayload>[]
          }
          upsert: {
            args: Prisma.TravelPlanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelPlanPayload>
          }
          aggregate: {
            args: Prisma.TravelPlanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTravelPlan>
          }
          groupBy: {
            args: Prisma.TravelPlanGroupByArgs<ExtArgs>
            result: $Utils.Optional<TravelPlanGroupByOutputType>[]
          }
          count: {
            args: Prisma.TravelPlanCountArgs<ExtArgs>
            result: $Utils.Optional<TravelPlanCountAggregateOutputType> | number
          }
        }
      }
      TravelPlanParticipant: {
        payload: Prisma.$TravelPlanParticipantPayload<ExtArgs>
        fields: Prisma.TravelPlanParticipantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TravelPlanParticipantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelPlanParticipantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TravelPlanParticipantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelPlanParticipantPayload>
          }
          findFirst: {
            args: Prisma.TravelPlanParticipantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelPlanParticipantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TravelPlanParticipantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelPlanParticipantPayload>
          }
          findMany: {
            args: Prisma.TravelPlanParticipantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelPlanParticipantPayload>[]
          }
          create: {
            args: Prisma.TravelPlanParticipantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelPlanParticipantPayload>
          }
          createMany: {
            args: Prisma.TravelPlanParticipantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TravelPlanParticipantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelPlanParticipantPayload>[]
          }
          delete: {
            args: Prisma.TravelPlanParticipantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelPlanParticipantPayload>
          }
          update: {
            args: Prisma.TravelPlanParticipantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelPlanParticipantPayload>
          }
          deleteMany: {
            args: Prisma.TravelPlanParticipantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TravelPlanParticipantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TravelPlanParticipantUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelPlanParticipantPayload>[]
          }
          upsert: {
            args: Prisma.TravelPlanParticipantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelPlanParticipantPayload>
          }
          aggregate: {
            args: Prisma.TravelPlanParticipantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTravelPlanParticipant>
          }
          groupBy: {
            args: Prisma.TravelPlanParticipantGroupByArgs<ExtArgs>
            result: $Utils.Optional<TravelPlanParticipantGroupByOutputType>[]
          }
          count: {
            args: Prisma.TravelPlanParticipantCountArgs<ExtArgs>
            result: $Utils.Optional<TravelPlanParticipantCountAggregateOutputType> | number
          }
        }
      }
      TravelPlanJoinRequest: {
        payload: Prisma.$TravelPlanJoinRequestPayload<ExtArgs>
        fields: Prisma.TravelPlanJoinRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TravelPlanJoinRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelPlanJoinRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TravelPlanJoinRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelPlanJoinRequestPayload>
          }
          findFirst: {
            args: Prisma.TravelPlanJoinRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelPlanJoinRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TravelPlanJoinRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelPlanJoinRequestPayload>
          }
          findMany: {
            args: Prisma.TravelPlanJoinRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelPlanJoinRequestPayload>[]
          }
          create: {
            args: Prisma.TravelPlanJoinRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelPlanJoinRequestPayload>
          }
          createMany: {
            args: Prisma.TravelPlanJoinRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TravelPlanJoinRequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelPlanJoinRequestPayload>[]
          }
          delete: {
            args: Prisma.TravelPlanJoinRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelPlanJoinRequestPayload>
          }
          update: {
            args: Prisma.TravelPlanJoinRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelPlanJoinRequestPayload>
          }
          deleteMany: {
            args: Prisma.TravelPlanJoinRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TravelPlanJoinRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TravelPlanJoinRequestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelPlanJoinRequestPayload>[]
          }
          upsert: {
            args: Prisma.TravelPlanJoinRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelPlanJoinRequestPayload>
          }
          aggregate: {
            args: Prisma.TravelPlanJoinRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTravelPlanJoinRequest>
          }
          groupBy: {
            args: Prisma.TravelPlanJoinRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<TravelPlanJoinRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.TravelPlanJoinRequestCountArgs<ExtArgs>
            result: $Utils.Optional<TravelPlanJoinRequestCountAggregateOutputType> | number
          }
        }
      }
      Review: {
        payload: Prisma.$ReviewPayload<ExtArgs>
        fields: Prisma.ReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findFirst: {
            args: Prisma.ReviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findMany: {
            args: Prisma.ReviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          create: {
            args: Prisma.ReviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          createMany: {
            args: Prisma.ReviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReviewCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          delete: {
            args: Prisma.ReviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          update: {
            args: Prisma.ReviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          deleteMany: {
            args: Prisma.ReviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReviewUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          upsert: {
            args: Prisma.ReviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          aggregate: {
            args: Prisma.ReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReview>
          }
          groupBy: {
            args: Prisma.ReviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewCountAggregateOutputType> | number
          }
        }
      }
      Payment: {
        payload: Prisma.$PaymentPayload<ExtArgs>
        fields: Prisma.PaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findFirst: {
            args: Prisma.PaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findMany: {
            args: Prisma.PaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          create: {
            args: Prisma.PaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          createMany: {
            args: Prisma.PaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          delete: {
            args: Prisma.PaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          update: {
            args: Prisma.PaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          deleteMany: {
            args: Prisma.PaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          upsert: {
            args: Prisma.PaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment>
          }
          groupBy: {
            args: Prisma.PaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number
          }
        }
      }
      Subscription: {
        payload: Prisma.$SubscriptionPayload<ExtArgs>
        fields: Prisma.SubscriptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubscriptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubscriptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          findFirst: {
            args: Prisma.SubscriptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubscriptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          findMany: {
            args: Prisma.SubscriptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          create: {
            args: Prisma.SubscriptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          createMany: {
            args: Prisma.SubscriptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubscriptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          delete: {
            args: Prisma.SubscriptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          update: {
            args: Prisma.SubscriptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          deleteMany: {
            args: Prisma.SubscriptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubscriptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubscriptionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          upsert: {
            args: Prisma.SubscriptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          aggregate: {
            args: Prisma.SubscriptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubscription>
          }
          groupBy: {
            args: Prisma.SubscriptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubscriptionCountArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    travelPlan?: TravelPlanOmit
    travelPlanParticipant?: TravelPlanParticipantOmit
    travelPlanJoinRequest?: TravelPlanJoinRequestOmit
    review?: ReviewOmit
    payment?: PaymentOmit
    subscription?: SubscriptionOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    travelPlans: number
    joinRequests: number
    participants: number
    givenReviews: number
    receivedReviews: number
    payments: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    travelPlans?: boolean | UserCountOutputTypeCountTravelPlansArgs
    joinRequests?: boolean | UserCountOutputTypeCountJoinRequestsArgs
    participants?: boolean | UserCountOutputTypeCountParticipantsArgs
    givenReviews?: boolean | UserCountOutputTypeCountGivenReviewsArgs
    receivedReviews?: boolean | UserCountOutputTypeCountReceivedReviewsArgs
    payments?: boolean | UserCountOutputTypeCountPaymentsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTravelPlansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TravelPlanWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountJoinRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TravelPlanJoinRequestWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountParticipantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TravelPlanParticipantWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGivenReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReceivedReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }


  /**
   * Count Type TravelPlanCountOutputType
   */

  export type TravelPlanCountOutputType = {
    participants: number
    joinRequests: number
    reviews: number
  }

  export type TravelPlanCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participants?: boolean | TravelPlanCountOutputTypeCountParticipantsArgs
    joinRequests?: boolean | TravelPlanCountOutputTypeCountJoinRequestsArgs
    reviews?: boolean | TravelPlanCountOutputTypeCountReviewsArgs
  }

  // Custom InputTypes
  /**
   * TravelPlanCountOutputType without action
   */
  export type TravelPlanCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelPlanCountOutputType
     */
    select?: TravelPlanCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TravelPlanCountOutputType without action
   */
  export type TravelPlanCountOutputTypeCountParticipantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TravelPlanParticipantWhereInput
  }

  /**
   * TravelPlanCountOutputType without action
   */
  export type TravelPlanCountOutputTypeCountJoinRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TravelPlanJoinRequestWhereInput
  }

  /**
   * TravelPlanCountOutputType without action
   */
  export type TravelPlanCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }


  /**
   * Count Type SubscriptionCountOutputType
   */

  export type SubscriptionCountOutputType = {
    payments: number
  }

  export type SubscriptionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payments?: boolean | SubscriptionCountOutputTypeCountPaymentsArgs
  }

  // Custom InputTypes
  /**
   * SubscriptionCountOutputType without action
   */
  export type SubscriptionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionCountOutputType
     */
    select?: SubscriptionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SubscriptionCountOutputType without action
   */
  export type SubscriptionCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.UserRole | null
    bio: string | null
    profileImage: string | null
    currentLocation: string | null
    gender: $Enums.Gender | null
    verifiedBadge: boolean | null
    status: $Enums.UserStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.UserRole | null
    bio: string | null
    profileImage: string | null
    currentLocation: string | null
    gender: $Enums.Gender | null
    verifiedBadge: boolean | null
    status: $Enums.UserStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    role: number
    bio: number
    profileImage: number
    currentLocation: number
    gender: number
    interests: number
    visitedCountries: number
    verifiedBadge: number
    status: number
    createdTravelPlans: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    bio?: true
    profileImage?: true
    currentLocation?: true
    gender?: true
    verifiedBadge?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    bio?: true
    profileImage?: true
    currentLocation?: true
    gender?: true
    verifiedBadge?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    bio?: true
    profileImage?: true
    currentLocation?: true
    gender?: true
    interests?: true
    visitedCountries?: true
    verifiedBadge?: true
    status?: true
    createdTravelPlans?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    password: string
    role: $Enums.UserRole
    bio: string | null
    profileImage: string | null
    currentLocation: string | null
    gender: $Enums.Gender
    interests: string[]
    visitedCountries: string[]
    verifiedBadge: boolean
    status: $Enums.UserStatus
    createdTravelPlans: string[]
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    bio?: boolean
    profileImage?: boolean
    currentLocation?: boolean
    gender?: boolean
    interests?: boolean
    visitedCountries?: boolean
    verifiedBadge?: boolean
    status?: boolean
    createdTravelPlans?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    travelPlans?: boolean | User$travelPlansArgs<ExtArgs>
    joinRequests?: boolean | User$joinRequestsArgs<ExtArgs>
    participants?: boolean | User$participantsArgs<ExtArgs>
    givenReviews?: boolean | User$givenReviewsArgs<ExtArgs>
    receivedReviews?: boolean | User$receivedReviewsArgs<ExtArgs>
    payments?: boolean | User$paymentsArgs<ExtArgs>
    subscription?: boolean | User$subscriptionArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    bio?: boolean
    profileImage?: boolean
    currentLocation?: boolean
    gender?: boolean
    interests?: boolean
    visitedCountries?: boolean
    verifiedBadge?: boolean
    status?: boolean
    createdTravelPlans?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    bio?: boolean
    profileImage?: boolean
    currentLocation?: boolean
    gender?: boolean
    interests?: boolean
    visitedCountries?: boolean
    verifiedBadge?: boolean
    status?: boolean
    createdTravelPlans?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    bio?: boolean
    profileImage?: boolean
    currentLocation?: boolean
    gender?: boolean
    interests?: boolean
    visitedCountries?: boolean
    verifiedBadge?: boolean
    status?: boolean
    createdTravelPlans?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "role" | "bio" | "profileImage" | "currentLocation" | "gender" | "interests" | "visitedCountries" | "verifiedBadge" | "status" | "createdTravelPlans" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    travelPlans?: boolean | User$travelPlansArgs<ExtArgs>
    joinRequests?: boolean | User$joinRequestsArgs<ExtArgs>
    participants?: boolean | User$participantsArgs<ExtArgs>
    givenReviews?: boolean | User$givenReviewsArgs<ExtArgs>
    receivedReviews?: boolean | User$receivedReviewsArgs<ExtArgs>
    payments?: boolean | User$paymentsArgs<ExtArgs>
    subscription?: boolean | User$subscriptionArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      travelPlans: Prisma.$TravelPlanPayload<ExtArgs>[]
      joinRequests: Prisma.$TravelPlanJoinRequestPayload<ExtArgs>[]
      participants: Prisma.$TravelPlanParticipantPayload<ExtArgs>[]
      givenReviews: Prisma.$ReviewPayload<ExtArgs>[]
      receivedReviews: Prisma.$ReviewPayload<ExtArgs>[]
      payments: Prisma.$PaymentPayload<ExtArgs>[]
      subscription: Prisma.$SubscriptionPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
      role: $Enums.UserRole
      bio: string | null
      profileImage: string | null
      currentLocation: string | null
      gender: $Enums.Gender
      interests: string[]
      visitedCountries: string[]
      verifiedBadge: boolean
      status: $Enums.UserStatus
      createdTravelPlans: string[]
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    travelPlans<T extends User$travelPlansArgs<ExtArgs> = {}>(args?: Subset<T, User$travelPlansArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TravelPlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    joinRequests<T extends User$joinRequestsArgs<ExtArgs> = {}>(args?: Subset<T, User$joinRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TravelPlanJoinRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    participants<T extends User$participantsArgs<ExtArgs> = {}>(args?: Subset<T, User$participantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TravelPlanParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    givenReviews<T extends User$givenReviewsArgs<ExtArgs> = {}>(args?: Subset<T, User$givenReviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    receivedReviews<T extends User$receivedReviewsArgs<ExtArgs> = {}>(args?: Subset<T, User$receivedReviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    payments<T extends User$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, User$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    subscription<T extends User$subscriptionArgs<ExtArgs> = {}>(args?: Subset<T, User$subscriptionArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly bio: FieldRef<"User", 'String'>
    readonly profileImage: FieldRef<"User", 'String'>
    readonly currentLocation: FieldRef<"User", 'String'>
    readonly gender: FieldRef<"User", 'Gender'>
    readonly interests: FieldRef<"User", 'String[]'>
    readonly visitedCountries: FieldRef<"User", 'String[]'>
    readonly verifiedBadge: FieldRef<"User", 'Boolean'>
    readonly status: FieldRef<"User", 'UserStatus'>
    readonly createdTravelPlans: FieldRef<"User", 'String[]'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.travelPlans
   */
  export type User$travelPlansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelPlan
     */
    select?: TravelPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelPlan
     */
    omit?: TravelPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelPlanInclude<ExtArgs> | null
    where?: TravelPlanWhereInput
    orderBy?: TravelPlanOrderByWithRelationInput | TravelPlanOrderByWithRelationInput[]
    cursor?: TravelPlanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TravelPlanScalarFieldEnum | TravelPlanScalarFieldEnum[]
  }

  /**
   * User.joinRequests
   */
  export type User$joinRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelPlanJoinRequest
     */
    select?: TravelPlanJoinRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelPlanJoinRequest
     */
    omit?: TravelPlanJoinRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelPlanJoinRequestInclude<ExtArgs> | null
    where?: TravelPlanJoinRequestWhereInput
    orderBy?: TravelPlanJoinRequestOrderByWithRelationInput | TravelPlanJoinRequestOrderByWithRelationInput[]
    cursor?: TravelPlanJoinRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TravelPlanJoinRequestScalarFieldEnum | TravelPlanJoinRequestScalarFieldEnum[]
  }

  /**
   * User.participants
   */
  export type User$participantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelPlanParticipant
     */
    select?: TravelPlanParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelPlanParticipant
     */
    omit?: TravelPlanParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelPlanParticipantInclude<ExtArgs> | null
    where?: TravelPlanParticipantWhereInput
    orderBy?: TravelPlanParticipantOrderByWithRelationInput | TravelPlanParticipantOrderByWithRelationInput[]
    cursor?: TravelPlanParticipantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TravelPlanParticipantScalarFieldEnum | TravelPlanParticipantScalarFieldEnum[]
  }

  /**
   * User.givenReviews
   */
  export type User$givenReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * User.receivedReviews
   */
  export type User$receivedReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * User.payments
   */
  export type User$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * User.subscription
   */
  export type User$subscriptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    where?: SubscriptionWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model TravelPlan
   */

  export type AggregateTravelPlan = {
    _count: TravelPlanCountAggregateOutputType | null
    _min: TravelPlanMinAggregateOutputType | null
    _max: TravelPlanMaxAggregateOutputType | null
  }

  export type TravelPlanMinAggregateOutputType = {
    id: string | null
    userId: string | null
    destination: string | null
    startDate: Date | null
    endDate: Date | null
    budgetRange: string | null
    travelType: $Enums.TravelType | null
    description: string | null
    visibility: boolean | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TravelPlanMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    destination: string | null
    startDate: Date | null
    endDate: Date | null
    budgetRange: string | null
    travelType: $Enums.TravelType | null
    description: string | null
    visibility: boolean | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TravelPlanCountAggregateOutputType = {
    id: number
    userId: number
    destination: number
    startDate: number
    endDate: number
    budgetRange: number
    travelType: number
    description: number
    visibility: number
    isDeleted: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TravelPlanMinAggregateInputType = {
    id?: true
    userId?: true
    destination?: true
    startDate?: true
    endDate?: true
    budgetRange?: true
    travelType?: true
    description?: true
    visibility?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TravelPlanMaxAggregateInputType = {
    id?: true
    userId?: true
    destination?: true
    startDate?: true
    endDate?: true
    budgetRange?: true
    travelType?: true
    description?: true
    visibility?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TravelPlanCountAggregateInputType = {
    id?: true
    userId?: true
    destination?: true
    startDate?: true
    endDate?: true
    budgetRange?: true
    travelType?: true
    description?: true
    visibility?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TravelPlanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TravelPlan to aggregate.
     */
    where?: TravelPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TravelPlans to fetch.
     */
    orderBy?: TravelPlanOrderByWithRelationInput | TravelPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TravelPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TravelPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TravelPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TravelPlans
    **/
    _count?: true | TravelPlanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TravelPlanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TravelPlanMaxAggregateInputType
  }

  export type GetTravelPlanAggregateType<T extends TravelPlanAggregateArgs> = {
        [P in keyof T & keyof AggregateTravelPlan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTravelPlan[P]>
      : GetScalarType<T[P], AggregateTravelPlan[P]>
  }




  export type TravelPlanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TravelPlanWhereInput
    orderBy?: TravelPlanOrderByWithAggregationInput | TravelPlanOrderByWithAggregationInput[]
    by: TravelPlanScalarFieldEnum[] | TravelPlanScalarFieldEnum
    having?: TravelPlanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TravelPlanCountAggregateInputType | true
    _min?: TravelPlanMinAggregateInputType
    _max?: TravelPlanMaxAggregateInputType
  }

  export type TravelPlanGroupByOutputType = {
    id: string
    userId: string
    destination: string
    startDate: Date
    endDate: Date
    budgetRange: string | null
    travelType: $Enums.TravelType
    description: string | null
    visibility: boolean
    isDeleted: boolean
    createdAt: Date
    updatedAt: Date
    _count: TravelPlanCountAggregateOutputType | null
    _min: TravelPlanMinAggregateOutputType | null
    _max: TravelPlanMaxAggregateOutputType | null
  }

  type GetTravelPlanGroupByPayload<T extends TravelPlanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TravelPlanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TravelPlanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TravelPlanGroupByOutputType[P]>
            : GetScalarType<T[P], TravelPlanGroupByOutputType[P]>
        }
      >
    >


  export type TravelPlanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    destination?: boolean
    startDate?: boolean
    endDate?: boolean
    budgetRange?: boolean
    travelType?: boolean
    description?: boolean
    visibility?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    participants?: boolean | TravelPlan$participantsArgs<ExtArgs>
    joinRequests?: boolean | TravelPlan$joinRequestsArgs<ExtArgs>
    reviews?: boolean | TravelPlan$reviewsArgs<ExtArgs>
    _count?: boolean | TravelPlanCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["travelPlan"]>

  export type TravelPlanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    destination?: boolean
    startDate?: boolean
    endDate?: boolean
    budgetRange?: boolean
    travelType?: boolean
    description?: boolean
    visibility?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["travelPlan"]>

  export type TravelPlanSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    destination?: boolean
    startDate?: boolean
    endDate?: boolean
    budgetRange?: boolean
    travelType?: boolean
    description?: boolean
    visibility?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["travelPlan"]>

  export type TravelPlanSelectScalar = {
    id?: boolean
    userId?: boolean
    destination?: boolean
    startDate?: boolean
    endDate?: boolean
    budgetRange?: boolean
    travelType?: boolean
    description?: boolean
    visibility?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TravelPlanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "destination" | "startDate" | "endDate" | "budgetRange" | "travelType" | "description" | "visibility" | "isDeleted" | "createdAt" | "updatedAt", ExtArgs["result"]["travelPlan"]>
  export type TravelPlanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    participants?: boolean | TravelPlan$participantsArgs<ExtArgs>
    joinRequests?: boolean | TravelPlan$joinRequestsArgs<ExtArgs>
    reviews?: boolean | TravelPlan$reviewsArgs<ExtArgs>
    _count?: boolean | TravelPlanCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TravelPlanIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TravelPlanIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TravelPlanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TravelPlan"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      participants: Prisma.$TravelPlanParticipantPayload<ExtArgs>[]
      joinRequests: Prisma.$TravelPlanJoinRequestPayload<ExtArgs>[]
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      destination: string
      startDate: Date
      endDate: Date
      budgetRange: string | null
      travelType: $Enums.TravelType
      description: string | null
      visibility: boolean
      isDeleted: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["travelPlan"]>
    composites: {}
  }

  type TravelPlanGetPayload<S extends boolean | null | undefined | TravelPlanDefaultArgs> = $Result.GetResult<Prisma.$TravelPlanPayload, S>

  type TravelPlanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TravelPlanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TravelPlanCountAggregateInputType | true
    }

  export interface TravelPlanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TravelPlan'], meta: { name: 'TravelPlan' } }
    /**
     * Find zero or one TravelPlan that matches the filter.
     * @param {TravelPlanFindUniqueArgs} args - Arguments to find a TravelPlan
     * @example
     * // Get one TravelPlan
     * const travelPlan = await prisma.travelPlan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TravelPlanFindUniqueArgs>(args: SelectSubset<T, TravelPlanFindUniqueArgs<ExtArgs>>): Prisma__TravelPlanClient<$Result.GetResult<Prisma.$TravelPlanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TravelPlan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TravelPlanFindUniqueOrThrowArgs} args - Arguments to find a TravelPlan
     * @example
     * // Get one TravelPlan
     * const travelPlan = await prisma.travelPlan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TravelPlanFindUniqueOrThrowArgs>(args: SelectSubset<T, TravelPlanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TravelPlanClient<$Result.GetResult<Prisma.$TravelPlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TravelPlan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelPlanFindFirstArgs} args - Arguments to find a TravelPlan
     * @example
     * // Get one TravelPlan
     * const travelPlan = await prisma.travelPlan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TravelPlanFindFirstArgs>(args?: SelectSubset<T, TravelPlanFindFirstArgs<ExtArgs>>): Prisma__TravelPlanClient<$Result.GetResult<Prisma.$TravelPlanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TravelPlan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelPlanFindFirstOrThrowArgs} args - Arguments to find a TravelPlan
     * @example
     * // Get one TravelPlan
     * const travelPlan = await prisma.travelPlan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TravelPlanFindFirstOrThrowArgs>(args?: SelectSubset<T, TravelPlanFindFirstOrThrowArgs<ExtArgs>>): Prisma__TravelPlanClient<$Result.GetResult<Prisma.$TravelPlanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TravelPlans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelPlanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TravelPlans
     * const travelPlans = await prisma.travelPlan.findMany()
     * 
     * // Get first 10 TravelPlans
     * const travelPlans = await prisma.travelPlan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const travelPlanWithIdOnly = await prisma.travelPlan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TravelPlanFindManyArgs>(args?: SelectSubset<T, TravelPlanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TravelPlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TravelPlan.
     * @param {TravelPlanCreateArgs} args - Arguments to create a TravelPlan.
     * @example
     * // Create one TravelPlan
     * const TravelPlan = await prisma.travelPlan.create({
     *   data: {
     *     // ... data to create a TravelPlan
     *   }
     * })
     * 
     */
    create<T extends TravelPlanCreateArgs>(args: SelectSubset<T, TravelPlanCreateArgs<ExtArgs>>): Prisma__TravelPlanClient<$Result.GetResult<Prisma.$TravelPlanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TravelPlans.
     * @param {TravelPlanCreateManyArgs} args - Arguments to create many TravelPlans.
     * @example
     * // Create many TravelPlans
     * const travelPlan = await prisma.travelPlan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TravelPlanCreateManyArgs>(args?: SelectSubset<T, TravelPlanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TravelPlans and returns the data saved in the database.
     * @param {TravelPlanCreateManyAndReturnArgs} args - Arguments to create many TravelPlans.
     * @example
     * // Create many TravelPlans
     * const travelPlan = await prisma.travelPlan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TravelPlans and only return the `id`
     * const travelPlanWithIdOnly = await prisma.travelPlan.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TravelPlanCreateManyAndReturnArgs>(args?: SelectSubset<T, TravelPlanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TravelPlanPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TravelPlan.
     * @param {TravelPlanDeleteArgs} args - Arguments to delete one TravelPlan.
     * @example
     * // Delete one TravelPlan
     * const TravelPlan = await prisma.travelPlan.delete({
     *   where: {
     *     // ... filter to delete one TravelPlan
     *   }
     * })
     * 
     */
    delete<T extends TravelPlanDeleteArgs>(args: SelectSubset<T, TravelPlanDeleteArgs<ExtArgs>>): Prisma__TravelPlanClient<$Result.GetResult<Prisma.$TravelPlanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TravelPlan.
     * @param {TravelPlanUpdateArgs} args - Arguments to update one TravelPlan.
     * @example
     * // Update one TravelPlan
     * const travelPlan = await prisma.travelPlan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TravelPlanUpdateArgs>(args: SelectSubset<T, TravelPlanUpdateArgs<ExtArgs>>): Prisma__TravelPlanClient<$Result.GetResult<Prisma.$TravelPlanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TravelPlans.
     * @param {TravelPlanDeleteManyArgs} args - Arguments to filter TravelPlans to delete.
     * @example
     * // Delete a few TravelPlans
     * const { count } = await prisma.travelPlan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TravelPlanDeleteManyArgs>(args?: SelectSubset<T, TravelPlanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TravelPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelPlanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TravelPlans
     * const travelPlan = await prisma.travelPlan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TravelPlanUpdateManyArgs>(args: SelectSubset<T, TravelPlanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TravelPlans and returns the data updated in the database.
     * @param {TravelPlanUpdateManyAndReturnArgs} args - Arguments to update many TravelPlans.
     * @example
     * // Update many TravelPlans
     * const travelPlan = await prisma.travelPlan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TravelPlans and only return the `id`
     * const travelPlanWithIdOnly = await prisma.travelPlan.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TravelPlanUpdateManyAndReturnArgs>(args: SelectSubset<T, TravelPlanUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TravelPlanPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TravelPlan.
     * @param {TravelPlanUpsertArgs} args - Arguments to update or create a TravelPlan.
     * @example
     * // Update or create a TravelPlan
     * const travelPlan = await prisma.travelPlan.upsert({
     *   create: {
     *     // ... data to create a TravelPlan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TravelPlan we want to update
     *   }
     * })
     */
    upsert<T extends TravelPlanUpsertArgs>(args: SelectSubset<T, TravelPlanUpsertArgs<ExtArgs>>): Prisma__TravelPlanClient<$Result.GetResult<Prisma.$TravelPlanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TravelPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelPlanCountArgs} args - Arguments to filter TravelPlans to count.
     * @example
     * // Count the number of TravelPlans
     * const count = await prisma.travelPlan.count({
     *   where: {
     *     // ... the filter for the TravelPlans we want to count
     *   }
     * })
    **/
    count<T extends TravelPlanCountArgs>(
      args?: Subset<T, TravelPlanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TravelPlanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TravelPlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelPlanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TravelPlanAggregateArgs>(args: Subset<T, TravelPlanAggregateArgs>): Prisma.PrismaPromise<GetTravelPlanAggregateType<T>>

    /**
     * Group by TravelPlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelPlanGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TravelPlanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TravelPlanGroupByArgs['orderBy'] }
        : { orderBy?: TravelPlanGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TravelPlanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTravelPlanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TravelPlan model
   */
  readonly fields: TravelPlanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TravelPlan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TravelPlanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    participants<T extends TravelPlan$participantsArgs<ExtArgs> = {}>(args?: Subset<T, TravelPlan$participantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TravelPlanParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    joinRequests<T extends TravelPlan$joinRequestsArgs<ExtArgs> = {}>(args?: Subset<T, TravelPlan$joinRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TravelPlanJoinRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviews<T extends TravelPlan$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, TravelPlan$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TravelPlan model
   */
  interface TravelPlanFieldRefs {
    readonly id: FieldRef<"TravelPlan", 'String'>
    readonly userId: FieldRef<"TravelPlan", 'String'>
    readonly destination: FieldRef<"TravelPlan", 'String'>
    readonly startDate: FieldRef<"TravelPlan", 'DateTime'>
    readonly endDate: FieldRef<"TravelPlan", 'DateTime'>
    readonly budgetRange: FieldRef<"TravelPlan", 'String'>
    readonly travelType: FieldRef<"TravelPlan", 'TravelType'>
    readonly description: FieldRef<"TravelPlan", 'String'>
    readonly visibility: FieldRef<"TravelPlan", 'Boolean'>
    readonly isDeleted: FieldRef<"TravelPlan", 'Boolean'>
    readonly createdAt: FieldRef<"TravelPlan", 'DateTime'>
    readonly updatedAt: FieldRef<"TravelPlan", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TravelPlan findUnique
   */
  export type TravelPlanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelPlan
     */
    select?: TravelPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelPlan
     */
    omit?: TravelPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelPlanInclude<ExtArgs> | null
    /**
     * Filter, which TravelPlan to fetch.
     */
    where: TravelPlanWhereUniqueInput
  }

  /**
   * TravelPlan findUniqueOrThrow
   */
  export type TravelPlanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelPlan
     */
    select?: TravelPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelPlan
     */
    omit?: TravelPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelPlanInclude<ExtArgs> | null
    /**
     * Filter, which TravelPlan to fetch.
     */
    where: TravelPlanWhereUniqueInput
  }

  /**
   * TravelPlan findFirst
   */
  export type TravelPlanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelPlan
     */
    select?: TravelPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelPlan
     */
    omit?: TravelPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelPlanInclude<ExtArgs> | null
    /**
     * Filter, which TravelPlan to fetch.
     */
    where?: TravelPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TravelPlans to fetch.
     */
    orderBy?: TravelPlanOrderByWithRelationInput | TravelPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TravelPlans.
     */
    cursor?: TravelPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TravelPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TravelPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TravelPlans.
     */
    distinct?: TravelPlanScalarFieldEnum | TravelPlanScalarFieldEnum[]
  }

  /**
   * TravelPlan findFirstOrThrow
   */
  export type TravelPlanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelPlan
     */
    select?: TravelPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelPlan
     */
    omit?: TravelPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelPlanInclude<ExtArgs> | null
    /**
     * Filter, which TravelPlan to fetch.
     */
    where?: TravelPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TravelPlans to fetch.
     */
    orderBy?: TravelPlanOrderByWithRelationInput | TravelPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TravelPlans.
     */
    cursor?: TravelPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TravelPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TravelPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TravelPlans.
     */
    distinct?: TravelPlanScalarFieldEnum | TravelPlanScalarFieldEnum[]
  }

  /**
   * TravelPlan findMany
   */
  export type TravelPlanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelPlan
     */
    select?: TravelPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelPlan
     */
    omit?: TravelPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelPlanInclude<ExtArgs> | null
    /**
     * Filter, which TravelPlans to fetch.
     */
    where?: TravelPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TravelPlans to fetch.
     */
    orderBy?: TravelPlanOrderByWithRelationInput | TravelPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TravelPlans.
     */
    cursor?: TravelPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TravelPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TravelPlans.
     */
    skip?: number
    distinct?: TravelPlanScalarFieldEnum | TravelPlanScalarFieldEnum[]
  }

  /**
   * TravelPlan create
   */
  export type TravelPlanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelPlan
     */
    select?: TravelPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelPlan
     */
    omit?: TravelPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelPlanInclude<ExtArgs> | null
    /**
     * The data needed to create a TravelPlan.
     */
    data: XOR<TravelPlanCreateInput, TravelPlanUncheckedCreateInput>
  }

  /**
   * TravelPlan createMany
   */
  export type TravelPlanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TravelPlans.
     */
    data: TravelPlanCreateManyInput | TravelPlanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TravelPlan createManyAndReturn
   */
  export type TravelPlanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelPlan
     */
    select?: TravelPlanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TravelPlan
     */
    omit?: TravelPlanOmit<ExtArgs> | null
    /**
     * The data used to create many TravelPlans.
     */
    data: TravelPlanCreateManyInput | TravelPlanCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelPlanIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TravelPlan update
   */
  export type TravelPlanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelPlan
     */
    select?: TravelPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelPlan
     */
    omit?: TravelPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelPlanInclude<ExtArgs> | null
    /**
     * The data needed to update a TravelPlan.
     */
    data: XOR<TravelPlanUpdateInput, TravelPlanUncheckedUpdateInput>
    /**
     * Choose, which TravelPlan to update.
     */
    where: TravelPlanWhereUniqueInput
  }

  /**
   * TravelPlan updateMany
   */
  export type TravelPlanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TravelPlans.
     */
    data: XOR<TravelPlanUpdateManyMutationInput, TravelPlanUncheckedUpdateManyInput>
    /**
     * Filter which TravelPlans to update
     */
    where?: TravelPlanWhereInput
    /**
     * Limit how many TravelPlans to update.
     */
    limit?: number
  }

  /**
   * TravelPlan updateManyAndReturn
   */
  export type TravelPlanUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelPlan
     */
    select?: TravelPlanSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TravelPlan
     */
    omit?: TravelPlanOmit<ExtArgs> | null
    /**
     * The data used to update TravelPlans.
     */
    data: XOR<TravelPlanUpdateManyMutationInput, TravelPlanUncheckedUpdateManyInput>
    /**
     * Filter which TravelPlans to update
     */
    where?: TravelPlanWhereInput
    /**
     * Limit how many TravelPlans to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelPlanIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TravelPlan upsert
   */
  export type TravelPlanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelPlan
     */
    select?: TravelPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelPlan
     */
    omit?: TravelPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelPlanInclude<ExtArgs> | null
    /**
     * The filter to search for the TravelPlan to update in case it exists.
     */
    where: TravelPlanWhereUniqueInput
    /**
     * In case the TravelPlan found by the `where` argument doesn't exist, create a new TravelPlan with this data.
     */
    create: XOR<TravelPlanCreateInput, TravelPlanUncheckedCreateInput>
    /**
     * In case the TravelPlan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TravelPlanUpdateInput, TravelPlanUncheckedUpdateInput>
  }

  /**
   * TravelPlan delete
   */
  export type TravelPlanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelPlan
     */
    select?: TravelPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelPlan
     */
    omit?: TravelPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelPlanInclude<ExtArgs> | null
    /**
     * Filter which TravelPlan to delete.
     */
    where: TravelPlanWhereUniqueInput
  }

  /**
   * TravelPlan deleteMany
   */
  export type TravelPlanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TravelPlans to delete
     */
    where?: TravelPlanWhereInput
    /**
     * Limit how many TravelPlans to delete.
     */
    limit?: number
  }

  /**
   * TravelPlan.participants
   */
  export type TravelPlan$participantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelPlanParticipant
     */
    select?: TravelPlanParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelPlanParticipant
     */
    omit?: TravelPlanParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelPlanParticipantInclude<ExtArgs> | null
    where?: TravelPlanParticipantWhereInput
    orderBy?: TravelPlanParticipantOrderByWithRelationInput | TravelPlanParticipantOrderByWithRelationInput[]
    cursor?: TravelPlanParticipantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TravelPlanParticipantScalarFieldEnum | TravelPlanParticipantScalarFieldEnum[]
  }

  /**
   * TravelPlan.joinRequests
   */
  export type TravelPlan$joinRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelPlanJoinRequest
     */
    select?: TravelPlanJoinRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelPlanJoinRequest
     */
    omit?: TravelPlanJoinRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelPlanJoinRequestInclude<ExtArgs> | null
    where?: TravelPlanJoinRequestWhereInput
    orderBy?: TravelPlanJoinRequestOrderByWithRelationInput | TravelPlanJoinRequestOrderByWithRelationInput[]
    cursor?: TravelPlanJoinRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TravelPlanJoinRequestScalarFieldEnum | TravelPlanJoinRequestScalarFieldEnum[]
  }

  /**
   * TravelPlan.reviews
   */
  export type TravelPlan$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * TravelPlan without action
   */
  export type TravelPlanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelPlan
     */
    select?: TravelPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelPlan
     */
    omit?: TravelPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelPlanInclude<ExtArgs> | null
  }


  /**
   * Model TravelPlanParticipant
   */

  export type AggregateTravelPlanParticipant = {
    _count: TravelPlanParticipantCountAggregateOutputType | null
    _min: TravelPlanParticipantMinAggregateOutputType | null
    _max: TravelPlanParticipantMaxAggregateOutputType | null
  }

  export type TravelPlanParticipantMinAggregateOutputType = {
    id: string | null
    planId: string | null
    userId: string | null
    joinedAt: Date | null
    status: $Enums.ParticipantStatus | null
  }

  export type TravelPlanParticipantMaxAggregateOutputType = {
    id: string | null
    planId: string | null
    userId: string | null
    joinedAt: Date | null
    status: $Enums.ParticipantStatus | null
  }

  export type TravelPlanParticipantCountAggregateOutputType = {
    id: number
    planId: number
    userId: number
    joinedAt: number
    status: number
    _all: number
  }


  export type TravelPlanParticipantMinAggregateInputType = {
    id?: true
    planId?: true
    userId?: true
    joinedAt?: true
    status?: true
  }

  export type TravelPlanParticipantMaxAggregateInputType = {
    id?: true
    planId?: true
    userId?: true
    joinedAt?: true
    status?: true
  }

  export type TravelPlanParticipantCountAggregateInputType = {
    id?: true
    planId?: true
    userId?: true
    joinedAt?: true
    status?: true
    _all?: true
  }

  export type TravelPlanParticipantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TravelPlanParticipant to aggregate.
     */
    where?: TravelPlanParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TravelPlanParticipants to fetch.
     */
    orderBy?: TravelPlanParticipantOrderByWithRelationInput | TravelPlanParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TravelPlanParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TravelPlanParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TravelPlanParticipants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TravelPlanParticipants
    **/
    _count?: true | TravelPlanParticipantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TravelPlanParticipantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TravelPlanParticipantMaxAggregateInputType
  }

  export type GetTravelPlanParticipantAggregateType<T extends TravelPlanParticipantAggregateArgs> = {
        [P in keyof T & keyof AggregateTravelPlanParticipant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTravelPlanParticipant[P]>
      : GetScalarType<T[P], AggregateTravelPlanParticipant[P]>
  }




  export type TravelPlanParticipantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TravelPlanParticipantWhereInput
    orderBy?: TravelPlanParticipantOrderByWithAggregationInput | TravelPlanParticipantOrderByWithAggregationInput[]
    by: TravelPlanParticipantScalarFieldEnum[] | TravelPlanParticipantScalarFieldEnum
    having?: TravelPlanParticipantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TravelPlanParticipantCountAggregateInputType | true
    _min?: TravelPlanParticipantMinAggregateInputType
    _max?: TravelPlanParticipantMaxAggregateInputType
  }

  export type TravelPlanParticipantGroupByOutputType = {
    id: string
    planId: string
    userId: string
    joinedAt: Date
    status: $Enums.ParticipantStatus
    _count: TravelPlanParticipantCountAggregateOutputType | null
    _min: TravelPlanParticipantMinAggregateOutputType | null
    _max: TravelPlanParticipantMaxAggregateOutputType | null
  }

  type GetTravelPlanParticipantGroupByPayload<T extends TravelPlanParticipantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TravelPlanParticipantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TravelPlanParticipantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TravelPlanParticipantGroupByOutputType[P]>
            : GetScalarType<T[P], TravelPlanParticipantGroupByOutputType[P]>
        }
      >
    >


  export type TravelPlanParticipantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    planId?: boolean
    userId?: boolean
    joinedAt?: boolean
    status?: boolean
    plan?: boolean | TravelPlanDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["travelPlanParticipant"]>

  export type TravelPlanParticipantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    planId?: boolean
    userId?: boolean
    joinedAt?: boolean
    status?: boolean
    plan?: boolean | TravelPlanDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["travelPlanParticipant"]>

  export type TravelPlanParticipantSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    planId?: boolean
    userId?: boolean
    joinedAt?: boolean
    status?: boolean
    plan?: boolean | TravelPlanDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["travelPlanParticipant"]>

  export type TravelPlanParticipantSelectScalar = {
    id?: boolean
    planId?: boolean
    userId?: boolean
    joinedAt?: boolean
    status?: boolean
  }

  export type TravelPlanParticipantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "planId" | "userId" | "joinedAt" | "status", ExtArgs["result"]["travelPlanParticipant"]>
  export type TravelPlanParticipantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plan?: boolean | TravelPlanDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TravelPlanParticipantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plan?: boolean | TravelPlanDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TravelPlanParticipantIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plan?: boolean | TravelPlanDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TravelPlanParticipantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TravelPlanParticipant"
    objects: {
      plan: Prisma.$TravelPlanPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      planId: string
      userId: string
      joinedAt: Date
      status: $Enums.ParticipantStatus
    }, ExtArgs["result"]["travelPlanParticipant"]>
    composites: {}
  }

  type TravelPlanParticipantGetPayload<S extends boolean | null | undefined | TravelPlanParticipantDefaultArgs> = $Result.GetResult<Prisma.$TravelPlanParticipantPayload, S>

  type TravelPlanParticipantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TravelPlanParticipantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TravelPlanParticipantCountAggregateInputType | true
    }

  export interface TravelPlanParticipantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TravelPlanParticipant'], meta: { name: 'TravelPlanParticipant' } }
    /**
     * Find zero or one TravelPlanParticipant that matches the filter.
     * @param {TravelPlanParticipantFindUniqueArgs} args - Arguments to find a TravelPlanParticipant
     * @example
     * // Get one TravelPlanParticipant
     * const travelPlanParticipant = await prisma.travelPlanParticipant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TravelPlanParticipantFindUniqueArgs>(args: SelectSubset<T, TravelPlanParticipantFindUniqueArgs<ExtArgs>>): Prisma__TravelPlanParticipantClient<$Result.GetResult<Prisma.$TravelPlanParticipantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TravelPlanParticipant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TravelPlanParticipantFindUniqueOrThrowArgs} args - Arguments to find a TravelPlanParticipant
     * @example
     * // Get one TravelPlanParticipant
     * const travelPlanParticipant = await prisma.travelPlanParticipant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TravelPlanParticipantFindUniqueOrThrowArgs>(args: SelectSubset<T, TravelPlanParticipantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TravelPlanParticipantClient<$Result.GetResult<Prisma.$TravelPlanParticipantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TravelPlanParticipant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelPlanParticipantFindFirstArgs} args - Arguments to find a TravelPlanParticipant
     * @example
     * // Get one TravelPlanParticipant
     * const travelPlanParticipant = await prisma.travelPlanParticipant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TravelPlanParticipantFindFirstArgs>(args?: SelectSubset<T, TravelPlanParticipantFindFirstArgs<ExtArgs>>): Prisma__TravelPlanParticipantClient<$Result.GetResult<Prisma.$TravelPlanParticipantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TravelPlanParticipant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelPlanParticipantFindFirstOrThrowArgs} args - Arguments to find a TravelPlanParticipant
     * @example
     * // Get one TravelPlanParticipant
     * const travelPlanParticipant = await prisma.travelPlanParticipant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TravelPlanParticipantFindFirstOrThrowArgs>(args?: SelectSubset<T, TravelPlanParticipantFindFirstOrThrowArgs<ExtArgs>>): Prisma__TravelPlanParticipantClient<$Result.GetResult<Prisma.$TravelPlanParticipantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TravelPlanParticipants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelPlanParticipantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TravelPlanParticipants
     * const travelPlanParticipants = await prisma.travelPlanParticipant.findMany()
     * 
     * // Get first 10 TravelPlanParticipants
     * const travelPlanParticipants = await prisma.travelPlanParticipant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const travelPlanParticipantWithIdOnly = await prisma.travelPlanParticipant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TravelPlanParticipantFindManyArgs>(args?: SelectSubset<T, TravelPlanParticipantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TravelPlanParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TravelPlanParticipant.
     * @param {TravelPlanParticipantCreateArgs} args - Arguments to create a TravelPlanParticipant.
     * @example
     * // Create one TravelPlanParticipant
     * const TravelPlanParticipant = await prisma.travelPlanParticipant.create({
     *   data: {
     *     // ... data to create a TravelPlanParticipant
     *   }
     * })
     * 
     */
    create<T extends TravelPlanParticipantCreateArgs>(args: SelectSubset<T, TravelPlanParticipantCreateArgs<ExtArgs>>): Prisma__TravelPlanParticipantClient<$Result.GetResult<Prisma.$TravelPlanParticipantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TravelPlanParticipants.
     * @param {TravelPlanParticipantCreateManyArgs} args - Arguments to create many TravelPlanParticipants.
     * @example
     * // Create many TravelPlanParticipants
     * const travelPlanParticipant = await prisma.travelPlanParticipant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TravelPlanParticipantCreateManyArgs>(args?: SelectSubset<T, TravelPlanParticipantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TravelPlanParticipants and returns the data saved in the database.
     * @param {TravelPlanParticipantCreateManyAndReturnArgs} args - Arguments to create many TravelPlanParticipants.
     * @example
     * // Create many TravelPlanParticipants
     * const travelPlanParticipant = await prisma.travelPlanParticipant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TravelPlanParticipants and only return the `id`
     * const travelPlanParticipantWithIdOnly = await prisma.travelPlanParticipant.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TravelPlanParticipantCreateManyAndReturnArgs>(args?: SelectSubset<T, TravelPlanParticipantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TravelPlanParticipantPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TravelPlanParticipant.
     * @param {TravelPlanParticipantDeleteArgs} args - Arguments to delete one TravelPlanParticipant.
     * @example
     * // Delete one TravelPlanParticipant
     * const TravelPlanParticipant = await prisma.travelPlanParticipant.delete({
     *   where: {
     *     // ... filter to delete one TravelPlanParticipant
     *   }
     * })
     * 
     */
    delete<T extends TravelPlanParticipantDeleteArgs>(args: SelectSubset<T, TravelPlanParticipantDeleteArgs<ExtArgs>>): Prisma__TravelPlanParticipantClient<$Result.GetResult<Prisma.$TravelPlanParticipantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TravelPlanParticipant.
     * @param {TravelPlanParticipantUpdateArgs} args - Arguments to update one TravelPlanParticipant.
     * @example
     * // Update one TravelPlanParticipant
     * const travelPlanParticipant = await prisma.travelPlanParticipant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TravelPlanParticipantUpdateArgs>(args: SelectSubset<T, TravelPlanParticipantUpdateArgs<ExtArgs>>): Prisma__TravelPlanParticipantClient<$Result.GetResult<Prisma.$TravelPlanParticipantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TravelPlanParticipants.
     * @param {TravelPlanParticipantDeleteManyArgs} args - Arguments to filter TravelPlanParticipants to delete.
     * @example
     * // Delete a few TravelPlanParticipants
     * const { count } = await prisma.travelPlanParticipant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TravelPlanParticipantDeleteManyArgs>(args?: SelectSubset<T, TravelPlanParticipantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TravelPlanParticipants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelPlanParticipantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TravelPlanParticipants
     * const travelPlanParticipant = await prisma.travelPlanParticipant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TravelPlanParticipantUpdateManyArgs>(args: SelectSubset<T, TravelPlanParticipantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TravelPlanParticipants and returns the data updated in the database.
     * @param {TravelPlanParticipantUpdateManyAndReturnArgs} args - Arguments to update many TravelPlanParticipants.
     * @example
     * // Update many TravelPlanParticipants
     * const travelPlanParticipant = await prisma.travelPlanParticipant.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TravelPlanParticipants and only return the `id`
     * const travelPlanParticipantWithIdOnly = await prisma.travelPlanParticipant.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TravelPlanParticipantUpdateManyAndReturnArgs>(args: SelectSubset<T, TravelPlanParticipantUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TravelPlanParticipantPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TravelPlanParticipant.
     * @param {TravelPlanParticipantUpsertArgs} args - Arguments to update or create a TravelPlanParticipant.
     * @example
     * // Update or create a TravelPlanParticipant
     * const travelPlanParticipant = await prisma.travelPlanParticipant.upsert({
     *   create: {
     *     // ... data to create a TravelPlanParticipant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TravelPlanParticipant we want to update
     *   }
     * })
     */
    upsert<T extends TravelPlanParticipantUpsertArgs>(args: SelectSubset<T, TravelPlanParticipantUpsertArgs<ExtArgs>>): Prisma__TravelPlanParticipantClient<$Result.GetResult<Prisma.$TravelPlanParticipantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TravelPlanParticipants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelPlanParticipantCountArgs} args - Arguments to filter TravelPlanParticipants to count.
     * @example
     * // Count the number of TravelPlanParticipants
     * const count = await prisma.travelPlanParticipant.count({
     *   where: {
     *     // ... the filter for the TravelPlanParticipants we want to count
     *   }
     * })
    **/
    count<T extends TravelPlanParticipantCountArgs>(
      args?: Subset<T, TravelPlanParticipantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TravelPlanParticipantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TravelPlanParticipant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelPlanParticipantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TravelPlanParticipantAggregateArgs>(args: Subset<T, TravelPlanParticipantAggregateArgs>): Prisma.PrismaPromise<GetTravelPlanParticipantAggregateType<T>>

    /**
     * Group by TravelPlanParticipant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelPlanParticipantGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TravelPlanParticipantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TravelPlanParticipantGroupByArgs['orderBy'] }
        : { orderBy?: TravelPlanParticipantGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TravelPlanParticipantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTravelPlanParticipantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TravelPlanParticipant model
   */
  readonly fields: TravelPlanParticipantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TravelPlanParticipant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TravelPlanParticipantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    plan<T extends TravelPlanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TravelPlanDefaultArgs<ExtArgs>>): Prisma__TravelPlanClient<$Result.GetResult<Prisma.$TravelPlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TravelPlanParticipant model
   */
  interface TravelPlanParticipantFieldRefs {
    readonly id: FieldRef<"TravelPlanParticipant", 'String'>
    readonly planId: FieldRef<"TravelPlanParticipant", 'String'>
    readonly userId: FieldRef<"TravelPlanParticipant", 'String'>
    readonly joinedAt: FieldRef<"TravelPlanParticipant", 'DateTime'>
    readonly status: FieldRef<"TravelPlanParticipant", 'ParticipantStatus'>
  }
    

  // Custom InputTypes
  /**
   * TravelPlanParticipant findUnique
   */
  export type TravelPlanParticipantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelPlanParticipant
     */
    select?: TravelPlanParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelPlanParticipant
     */
    omit?: TravelPlanParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelPlanParticipantInclude<ExtArgs> | null
    /**
     * Filter, which TravelPlanParticipant to fetch.
     */
    where: TravelPlanParticipantWhereUniqueInput
  }

  /**
   * TravelPlanParticipant findUniqueOrThrow
   */
  export type TravelPlanParticipantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelPlanParticipant
     */
    select?: TravelPlanParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelPlanParticipant
     */
    omit?: TravelPlanParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelPlanParticipantInclude<ExtArgs> | null
    /**
     * Filter, which TravelPlanParticipant to fetch.
     */
    where: TravelPlanParticipantWhereUniqueInput
  }

  /**
   * TravelPlanParticipant findFirst
   */
  export type TravelPlanParticipantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelPlanParticipant
     */
    select?: TravelPlanParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelPlanParticipant
     */
    omit?: TravelPlanParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelPlanParticipantInclude<ExtArgs> | null
    /**
     * Filter, which TravelPlanParticipant to fetch.
     */
    where?: TravelPlanParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TravelPlanParticipants to fetch.
     */
    orderBy?: TravelPlanParticipantOrderByWithRelationInput | TravelPlanParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TravelPlanParticipants.
     */
    cursor?: TravelPlanParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TravelPlanParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TravelPlanParticipants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TravelPlanParticipants.
     */
    distinct?: TravelPlanParticipantScalarFieldEnum | TravelPlanParticipantScalarFieldEnum[]
  }

  /**
   * TravelPlanParticipant findFirstOrThrow
   */
  export type TravelPlanParticipantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelPlanParticipant
     */
    select?: TravelPlanParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelPlanParticipant
     */
    omit?: TravelPlanParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelPlanParticipantInclude<ExtArgs> | null
    /**
     * Filter, which TravelPlanParticipant to fetch.
     */
    where?: TravelPlanParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TravelPlanParticipants to fetch.
     */
    orderBy?: TravelPlanParticipantOrderByWithRelationInput | TravelPlanParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TravelPlanParticipants.
     */
    cursor?: TravelPlanParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TravelPlanParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TravelPlanParticipants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TravelPlanParticipants.
     */
    distinct?: TravelPlanParticipantScalarFieldEnum | TravelPlanParticipantScalarFieldEnum[]
  }

  /**
   * TravelPlanParticipant findMany
   */
  export type TravelPlanParticipantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelPlanParticipant
     */
    select?: TravelPlanParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelPlanParticipant
     */
    omit?: TravelPlanParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelPlanParticipantInclude<ExtArgs> | null
    /**
     * Filter, which TravelPlanParticipants to fetch.
     */
    where?: TravelPlanParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TravelPlanParticipants to fetch.
     */
    orderBy?: TravelPlanParticipantOrderByWithRelationInput | TravelPlanParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TravelPlanParticipants.
     */
    cursor?: TravelPlanParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TravelPlanParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TravelPlanParticipants.
     */
    skip?: number
    distinct?: TravelPlanParticipantScalarFieldEnum | TravelPlanParticipantScalarFieldEnum[]
  }

  /**
   * TravelPlanParticipant create
   */
  export type TravelPlanParticipantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelPlanParticipant
     */
    select?: TravelPlanParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelPlanParticipant
     */
    omit?: TravelPlanParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelPlanParticipantInclude<ExtArgs> | null
    /**
     * The data needed to create a TravelPlanParticipant.
     */
    data: XOR<TravelPlanParticipantCreateInput, TravelPlanParticipantUncheckedCreateInput>
  }

  /**
   * TravelPlanParticipant createMany
   */
  export type TravelPlanParticipantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TravelPlanParticipants.
     */
    data: TravelPlanParticipantCreateManyInput | TravelPlanParticipantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TravelPlanParticipant createManyAndReturn
   */
  export type TravelPlanParticipantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelPlanParticipant
     */
    select?: TravelPlanParticipantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TravelPlanParticipant
     */
    omit?: TravelPlanParticipantOmit<ExtArgs> | null
    /**
     * The data used to create many TravelPlanParticipants.
     */
    data: TravelPlanParticipantCreateManyInput | TravelPlanParticipantCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelPlanParticipantIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TravelPlanParticipant update
   */
  export type TravelPlanParticipantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelPlanParticipant
     */
    select?: TravelPlanParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelPlanParticipant
     */
    omit?: TravelPlanParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelPlanParticipantInclude<ExtArgs> | null
    /**
     * The data needed to update a TravelPlanParticipant.
     */
    data: XOR<TravelPlanParticipantUpdateInput, TravelPlanParticipantUncheckedUpdateInput>
    /**
     * Choose, which TravelPlanParticipant to update.
     */
    where: TravelPlanParticipantWhereUniqueInput
  }

  /**
   * TravelPlanParticipant updateMany
   */
  export type TravelPlanParticipantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TravelPlanParticipants.
     */
    data: XOR<TravelPlanParticipantUpdateManyMutationInput, TravelPlanParticipantUncheckedUpdateManyInput>
    /**
     * Filter which TravelPlanParticipants to update
     */
    where?: TravelPlanParticipantWhereInput
    /**
     * Limit how many TravelPlanParticipants to update.
     */
    limit?: number
  }

  /**
   * TravelPlanParticipant updateManyAndReturn
   */
  export type TravelPlanParticipantUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelPlanParticipant
     */
    select?: TravelPlanParticipantSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TravelPlanParticipant
     */
    omit?: TravelPlanParticipantOmit<ExtArgs> | null
    /**
     * The data used to update TravelPlanParticipants.
     */
    data: XOR<TravelPlanParticipantUpdateManyMutationInput, TravelPlanParticipantUncheckedUpdateManyInput>
    /**
     * Filter which TravelPlanParticipants to update
     */
    where?: TravelPlanParticipantWhereInput
    /**
     * Limit how many TravelPlanParticipants to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelPlanParticipantIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TravelPlanParticipant upsert
   */
  export type TravelPlanParticipantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelPlanParticipant
     */
    select?: TravelPlanParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelPlanParticipant
     */
    omit?: TravelPlanParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelPlanParticipantInclude<ExtArgs> | null
    /**
     * The filter to search for the TravelPlanParticipant to update in case it exists.
     */
    where: TravelPlanParticipantWhereUniqueInput
    /**
     * In case the TravelPlanParticipant found by the `where` argument doesn't exist, create a new TravelPlanParticipant with this data.
     */
    create: XOR<TravelPlanParticipantCreateInput, TravelPlanParticipantUncheckedCreateInput>
    /**
     * In case the TravelPlanParticipant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TravelPlanParticipantUpdateInput, TravelPlanParticipantUncheckedUpdateInput>
  }

  /**
   * TravelPlanParticipant delete
   */
  export type TravelPlanParticipantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelPlanParticipant
     */
    select?: TravelPlanParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelPlanParticipant
     */
    omit?: TravelPlanParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelPlanParticipantInclude<ExtArgs> | null
    /**
     * Filter which TravelPlanParticipant to delete.
     */
    where: TravelPlanParticipantWhereUniqueInput
  }

  /**
   * TravelPlanParticipant deleteMany
   */
  export type TravelPlanParticipantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TravelPlanParticipants to delete
     */
    where?: TravelPlanParticipantWhereInput
    /**
     * Limit how many TravelPlanParticipants to delete.
     */
    limit?: number
  }

  /**
   * TravelPlanParticipant without action
   */
  export type TravelPlanParticipantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelPlanParticipant
     */
    select?: TravelPlanParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelPlanParticipant
     */
    omit?: TravelPlanParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelPlanParticipantInclude<ExtArgs> | null
  }


  /**
   * Model TravelPlanJoinRequest
   */

  export type AggregateTravelPlanJoinRequest = {
    _count: TravelPlanJoinRequestCountAggregateOutputType | null
    _min: TravelPlanJoinRequestMinAggregateOutputType | null
    _max: TravelPlanJoinRequestMaxAggregateOutputType | null
  }

  export type TravelPlanJoinRequestMinAggregateOutputType = {
    id: string | null
    planId: string | null
    requesterId: string | null
    status: $Enums.JoinStatus | null
  }

  export type TravelPlanJoinRequestMaxAggregateOutputType = {
    id: string | null
    planId: string | null
    requesterId: string | null
    status: $Enums.JoinStatus | null
  }

  export type TravelPlanJoinRequestCountAggregateOutputType = {
    id: number
    planId: number
    requesterId: number
    status: number
    _all: number
  }


  export type TravelPlanJoinRequestMinAggregateInputType = {
    id?: true
    planId?: true
    requesterId?: true
    status?: true
  }

  export type TravelPlanJoinRequestMaxAggregateInputType = {
    id?: true
    planId?: true
    requesterId?: true
    status?: true
  }

  export type TravelPlanJoinRequestCountAggregateInputType = {
    id?: true
    planId?: true
    requesterId?: true
    status?: true
    _all?: true
  }

  export type TravelPlanJoinRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TravelPlanJoinRequest to aggregate.
     */
    where?: TravelPlanJoinRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TravelPlanJoinRequests to fetch.
     */
    orderBy?: TravelPlanJoinRequestOrderByWithRelationInput | TravelPlanJoinRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TravelPlanJoinRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TravelPlanJoinRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TravelPlanJoinRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TravelPlanJoinRequests
    **/
    _count?: true | TravelPlanJoinRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TravelPlanJoinRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TravelPlanJoinRequestMaxAggregateInputType
  }

  export type GetTravelPlanJoinRequestAggregateType<T extends TravelPlanJoinRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateTravelPlanJoinRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTravelPlanJoinRequest[P]>
      : GetScalarType<T[P], AggregateTravelPlanJoinRequest[P]>
  }




  export type TravelPlanJoinRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TravelPlanJoinRequestWhereInput
    orderBy?: TravelPlanJoinRequestOrderByWithAggregationInput | TravelPlanJoinRequestOrderByWithAggregationInput[]
    by: TravelPlanJoinRequestScalarFieldEnum[] | TravelPlanJoinRequestScalarFieldEnum
    having?: TravelPlanJoinRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TravelPlanJoinRequestCountAggregateInputType | true
    _min?: TravelPlanJoinRequestMinAggregateInputType
    _max?: TravelPlanJoinRequestMaxAggregateInputType
  }

  export type TravelPlanJoinRequestGroupByOutputType = {
    id: string
    planId: string
    requesterId: string
    status: $Enums.JoinStatus
    _count: TravelPlanJoinRequestCountAggregateOutputType | null
    _min: TravelPlanJoinRequestMinAggregateOutputType | null
    _max: TravelPlanJoinRequestMaxAggregateOutputType | null
  }

  type GetTravelPlanJoinRequestGroupByPayload<T extends TravelPlanJoinRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TravelPlanJoinRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TravelPlanJoinRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TravelPlanJoinRequestGroupByOutputType[P]>
            : GetScalarType<T[P], TravelPlanJoinRequestGroupByOutputType[P]>
        }
      >
    >


  export type TravelPlanJoinRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    planId?: boolean
    requesterId?: boolean
    status?: boolean
    plan?: boolean | TravelPlanDefaultArgs<ExtArgs>
    requester?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["travelPlanJoinRequest"]>

  export type TravelPlanJoinRequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    planId?: boolean
    requesterId?: boolean
    status?: boolean
    plan?: boolean | TravelPlanDefaultArgs<ExtArgs>
    requester?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["travelPlanJoinRequest"]>

  export type TravelPlanJoinRequestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    planId?: boolean
    requesterId?: boolean
    status?: boolean
    plan?: boolean | TravelPlanDefaultArgs<ExtArgs>
    requester?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["travelPlanJoinRequest"]>

  export type TravelPlanJoinRequestSelectScalar = {
    id?: boolean
    planId?: boolean
    requesterId?: boolean
    status?: boolean
  }

  export type TravelPlanJoinRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "planId" | "requesterId" | "status", ExtArgs["result"]["travelPlanJoinRequest"]>
  export type TravelPlanJoinRequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plan?: boolean | TravelPlanDefaultArgs<ExtArgs>
    requester?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TravelPlanJoinRequestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plan?: boolean | TravelPlanDefaultArgs<ExtArgs>
    requester?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TravelPlanJoinRequestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plan?: boolean | TravelPlanDefaultArgs<ExtArgs>
    requester?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TravelPlanJoinRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TravelPlanJoinRequest"
    objects: {
      plan: Prisma.$TravelPlanPayload<ExtArgs>
      requester: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      planId: string
      requesterId: string
      status: $Enums.JoinStatus
    }, ExtArgs["result"]["travelPlanJoinRequest"]>
    composites: {}
  }

  type TravelPlanJoinRequestGetPayload<S extends boolean | null | undefined | TravelPlanJoinRequestDefaultArgs> = $Result.GetResult<Prisma.$TravelPlanJoinRequestPayload, S>

  type TravelPlanJoinRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TravelPlanJoinRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TravelPlanJoinRequestCountAggregateInputType | true
    }

  export interface TravelPlanJoinRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TravelPlanJoinRequest'], meta: { name: 'TravelPlanJoinRequest' } }
    /**
     * Find zero or one TravelPlanJoinRequest that matches the filter.
     * @param {TravelPlanJoinRequestFindUniqueArgs} args - Arguments to find a TravelPlanJoinRequest
     * @example
     * // Get one TravelPlanJoinRequest
     * const travelPlanJoinRequest = await prisma.travelPlanJoinRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TravelPlanJoinRequestFindUniqueArgs>(args: SelectSubset<T, TravelPlanJoinRequestFindUniqueArgs<ExtArgs>>): Prisma__TravelPlanJoinRequestClient<$Result.GetResult<Prisma.$TravelPlanJoinRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TravelPlanJoinRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TravelPlanJoinRequestFindUniqueOrThrowArgs} args - Arguments to find a TravelPlanJoinRequest
     * @example
     * // Get one TravelPlanJoinRequest
     * const travelPlanJoinRequest = await prisma.travelPlanJoinRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TravelPlanJoinRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, TravelPlanJoinRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TravelPlanJoinRequestClient<$Result.GetResult<Prisma.$TravelPlanJoinRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TravelPlanJoinRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelPlanJoinRequestFindFirstArgs} args - Arguments to find a TravelPlanJoinRequest
     * @example
     * // Get one TravelPlanJoinRequest
     * const travelPlanJoinRequest = await prisma.travelPlanJoinRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TravelPlanJoinRequestFindFirstArgs>(args?: SelectSubset<T, TravelPlanJoinRequestFindFirstArgs<ExtArgs>>): Prisma__TravelPlanJoinRequestClient<$Result.GetResult<Prisma.$TravelPlanJoinRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TravelPlanJoinRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelPlanJoinRequestFindFirstOrThrowArgs} args - Arguments to find a TravelPlanJoinRequest
     * @example
     * // Get one TravelPlanJoinRequest
     * const travelPlanJoinRequest = await prisma.travelPlanJoinRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TravelPlanJoinRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, TravelPlanJoinRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__TravelPlanJoinRequestClient<$Result.GetResult<Prisma.$TravelPlanJoinRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TravelPlanJoinRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelPlanJoinRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TravelPlanJoinRequests
     * const travelPlanJoinRequests = await prisma.travelPlanJoinRequest.findMany()
     * 
     * // Get first 10 TravelPlanJoinRequests
     * const travelPlanJoinRequests = await prisma.travelPlanJoinRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const travelPlanJoinRequestWithIdOnly = await prisma.travelPlanJoinRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TravelPlanJoinRequestFindManyArgs>(args?: SelectSubset<T, TravelPlanJoinRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TravelPlanJoinRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TravelPlanJoinRequest.
     * @param {TravelPlanJoinRequestCreateArgs} args - Arguments to create a TravelPlanJoinRequest.
     * @example
     * // Create one TravelPlanJoinRequest
     * const TravelPlanJoinRequest = await prisma.travelPlanJoinRequest.create({
     *   data: {
     *     // ... data to create a TravelPlanJoinRequest
     *   }
     * })
     * 
     */
    create<T extends TravelPlanJoinRequestCreateArgs>(args: SelectSubset<T, TravelPlanJoinRequestCreateArgs<ExtArgs>>): Prisma__TravelPlanJoinRequestClient<$Result.GetResult<Prisma.$TravelPlanJoinRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TravelPlanJoinRequests.
     * @param {TravelPlanJoinRequestCreateManyArgs} args - Arguments to create many TravelPlanJoinRequests.
     * @example
     * // Create many TravelPlanJoinRequests
     * const travelPlanJoinRequest = await prisma.travelPlanJoinRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TravelPlanJoinRequestCreateManyArgs>(args?: SelectSubset<T, TravelPlanJoinRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TravelPlanJoinRequests and returns the data saved in the database.
     * @param {TravelPlanJoinRequestCreateManyAndReturnArgs} args - Arguments to create many TravelPlanJoinRequests.
     * @example
     * // Create many TravelPlanJoinRequests
     * const travelPlanJoinRequest = await prisma.travelPlanJoinRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TravelPlanJoinRequests and only return the `id`
     * const travelPlanJoinRequestWithIdOnly = await prisma.travelPlanJoinRequest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TravelPlanJoinRequestCreateManyAndReturnArgs>(args?: SelectSubset<T, TravelPlanJoinRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TravelPlanJoinRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TravelPlanJoinRequest.
     * @param {TravelPlanJoinRequestDeleteArgs} args - Arguments to delete one TravelPlanJoinRequest.
     * @example
     * // Delete one TravelPlanJoinRequest
     * const TravelPlanJoinRequest = await prisma.travelPlanJoinRequest.delete({
     *   where: {
     *     // ... filter to delete one TravelPlanJoinRequest
     *   }
     * })
     * 
     */
    delete<T extends TravelPlanJoinRequestDeleteArgs>(args: SelectSubset<T, TravelPlanJoinRequestDeleteArgs<ExtArgs>>): Prisma__TravelPlanJoinRequestClient<$Result.GetResult<Prisma.$TravelPlanJoinRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TravelPlanJoinRequest.
     * @param {TravelPlanJoinRequestUpdateArgs} args - Arguments to update one TravelPlanJoinRequest.
     * @example
     * // Update one TravelPlanJoinRequest
     * const travelPlanJoinRequest = await prisma.travelPlanJoinRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TravelPlanJoinRequestUpdateArgs>(args: SelectSubset<T, TravelPlanJoinRequestUpdateArgs<ExtArgs>>): Prisma__TravelPlanJoinRequestClient<$Result.GetResult<Prisma.$TravelPlanJoinRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TravelPlanJoinRequests.
     * @param {TravelPlanJoinRequestDeleteManyArgs} args - Arguments to filter TravelPlanJoinRequests to delete.
     * @example
     * // Delete a few TravelPlanJoinRequests
     * const { count } = await prisma.travelPlanJoinRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TravelPlanJoinRequestDeleteManyArgs>(args?: SelectSubset<T, TravelPlanJoinRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TravelPlanJoinRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelPlanJoinRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TravelPlanJoinRequests
     * const travelPlanJoinRequest = await prisma.travelPlanJoinRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TravelPlanJoinRequestUpdateManyArgs>(args: SelectSubset<T, TravelPlanJoinRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TravelPlanJoinRequests and returns the data updated in the database.
     * @param {TravelPlanJoinRequestUpdateManyAndReturnArgs} args - Arguments to update many TravelPlanJoinRequests.
     * @example
     * // Update many TravelPlanJoinRequests
     * const travelPlanJoinRequest = await prisma.travelPlanJoinRequest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TravelPlanJoinRequests and only return the `id`
     * const travelPlanJoinRequestWithIdOnly = await prisma.travelPlanJoinRequest.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TravelPlanJoinRequestUpdateManyAndReturnArgs>(args: SelectSubset<T, TravelPlanJoinRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TravelPlanJoinRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TravelPlanJoinRequest.
     * @param {TravelPlanJoinRequestUpsertArgs} args - Arguments to update or create a TravelPlanJoinRequest.
     * @example
     * // Update or create a TravelPlanJoinRequest
     * const travelPlanJoinRequest = await prisma.travelPlanJoinRequest.upsert({
     *   create: {
     *     // ... data to create a TravelPlanJoinRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TravelPlanJoinRequest we want to update
     *   }
     * })
     */
    upsert<T extends TravelPlanJoinRequestUpsertArgs>(args: SelectSubset<T, TravelPlanJoinRequestUpsertArgs<ExtArgs>>): Prisma__TravelPlanJoinRequestClient<$Result.GetResult<Prisma.$TravelPlanJoinRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TravelPlanJoinRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelPlanJoinRequestCountArgs} args - Arguments to filter TravelPlanJoinRequests to count.
     * @example
     * // Count the number of TravelPlanJoinRequests
     * const count = await prisma.travelPlanJoinRequest.count({
     *   where: {
     *     // ... the filter for the TravelPlanJoinRequests we want to count
     *   }
     * })
    **/
    count<T extends TravelPlanJoinRequestCountArgs>(
      args?: Subset<T, TravelPlanJoinRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TravelPlanJoinRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TravelPlanJoinRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelPlanJoinRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TravelPlanJoinRequestAggregateArgs>(args: Subset<T, TravelPlanJoinRequestAggregateArgs>): Prisma.PrismaPromise<GetTravelPlanJoinRequestAggregateType<T>>

    /**
     * Group by TravelPlanJoinRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelPlanJoinRequestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TravelPlanJoinRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TravelPlanJoinRequestGroupByArgs['orderBy'] }
        : { orderBy?: TravelPlanJoinRequestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TravelPlanJoinRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTravelPlanJoinRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TravelPlanJoinRequest model
   */
  readonly fields: TravelPlanJoinRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TravelPlanJoinRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TravelPlanJoinRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    plan<T extends TravelPlanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TravelPlanDefaultArgs<ExtArgs>>): Prisma__TravelPlanClient<$Result.GetResult<Prisma.$TravelPlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    requester<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TravelPlanJoinRequest model
   */
  interface TravelPlanJoinRequestFieldRefs {
    readonly id: FieldRef<"TravelPlanJoinRequest", 'String'>
    readonly planId: FieldRef<"TravelPlanJoinRequest", 'String'>
    readonly requesterId: FieldRef<"TravelPlanJoinRequest", 'String'>
    readonly status: FieldRef<"TravelPlanJoinRequest", 'JoinStatus'>
  }
    

  // Custom InputTypes
  /**
   * TravelPlanJoinRequest findUnique
   */
  export type TravelPlanJoinRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelPlanJoinRequest
     */
    select?: TravelPlanJoinRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelPlanJoinRequest
     */
    omit?: TravelPlanJoinRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelPlanJoinRequestInclude<ExtArgs> | null
    /**
     * Filter, which TravelPlanJoinRequest to fetch.
     */
    where: TravelPlanJoinRequestWhereUniqueInput
  }

  /**
   * TravelPlanJoinRequest findUniqueOrThrow
   */
  export type TravelPlanJoinRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelPlanJoinRequest
     */
    select?: TravelPlanJoinRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelPlanJoinRequest
     */
    omit?: TravelPlanJoinRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelPlanJoinRequestInclude<ExtArgs> | null
    /**
     * Filter, which TravelPlanJoinRequest to fetch.
     */
    where: TravelPlanJoinRequestWhereUniqueInput
  }

  /**
   * TravelPlanJoinRequest findFirst
   */
  export type TravelPlanJoinRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelPlanJoinRequest
     */
    select?: TravelPlanJoinRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelPlanJoinRequest
     */
    omit?: TravelPlanJoinRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelPlanJoinRequestInclude<ExtArgs> | null
    /**
     * Filter, which TravelPlanJoinRequest to fetch.
     */
    where?: TravelPlanJoinRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TravelPlanJoinRequests to fetch.
     */
    orderBy?: TravelPlanJoinRequestOrderByWithRelationInput | TravelPlanJoinRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TravelPlanJoinRequests.
     */
    cursor?: TravelPlanJoinRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TravelPlanJoinRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TravelPlanJoinRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TravelPlanJoinRequests.
     */
    distinct?: TravelPlanJoinRequestScalarFieldEnum | TravelPlanJoinRequestScalarFieldEnum[]
  }

  /**
   * TravelPlanJoinRequest findFirstOrThrow
   */
  export type TravelPlanJoinRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelPlanJoinRequest
     */
    select?: TravelPlanJoinRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelPlanJoinRequest
     */
    omit?: TravelPlanJoinRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelPlanJoinRequestInclude<ExtArgs> | null
    /**
     * Filter, which TravelPlanJoinRequest to fetch.
     */
    where?: TravelPlanJoinRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TravelPlanJoinRequests to fetch.
     */
    orderBy?: TravelPlanJoinRequestOrderByWithRelationInput | TravelPlanJoinRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TravelPlanJoinRequests.
     */
    cursor?: TravelPlanJoinRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TravelPlanJoinRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TravelPlanJoinRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TravelPlanJoinRequests.
     */
    distinct?: TravelPlanJoinRequestScalarFieldEnum | TravelPlanJoinRequestScalarFieldEnum[]
  }

  /**
   * TravelPlanJoinRequest findMany
   */
  export type TravelPlanJoinRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelPlanJoinRequest
     */
    select?: TravelPlanJoinRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelPlanJoinRequest
     */
    omit?: TravelPlanJoinRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelPlanJoinRequestInclude<ExtArgs> | null
    /**
     * Filter, which TravelPlanJoinRequests to fetch.
     */
    where?: TravelPlanJoinRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TravelPlanJoinRequests to fetch.
     */
    orderBy?: TravelPlanJoinRequestOrderByWithRelationInput | TravelPlanJoinRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TravelPlanJoinRequests.
     */
    cursor?: TravelPlanJoinRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TravelPlanJoinRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TravelPlanJoinRequests.
     */
    skip?: number
    distinct?: TravelPlanJoinRequestScalarFieldEnum | TravelPlanJoinRequestScalarFieldEnum[]
  }

  /**
   * TravelPlanJoinRequest create
   */
  export type TravelPlanJoinRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelPlanJoinRequest
     */
    select?: TravelPlanJoinRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelPlanJoinRequest
     */
    omit?: TravelPlanJoinRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelPlanJoinRequestInclude<ExtArgs> | null
    /**
     * The data needed to create a TravelPlanJoinRequest.
     */
    data: XOR<TravelPlanJoinRequestCreateInput, TravelPlanJoinRequestUncheckedCreateInput>
  }

  /**
   * TravelPlanJoinRequest createMany
   */
  export type TravelPlanJoinRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TravelPlanJoinRequests.
     */
    data: TravelPlanJoinRequestCreateManyInput | TravelPlanJoinRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TravelPlanJoinRequest createManyAndReturn
   */
  export type TravelPlanJoinRequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelPlanJoinRequest
     */
    select?: TravelPlanJoinRequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TravelPlanJoinRequest
     */
    omit?: TravelPlanJoinRequestOmit<ExtArgs> | null
    /**
     * The data used to create many TravelPlanJoinRequests.
     */
    data: TravelPlanJoinRequestCreateManyInput | TravelPlanJoinRequestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelPlanJoinRequestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TravelPlanJoinRequest update
   */
  export type TravelPlanJoinRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelPlanJoinRequest
     */
    select?: TravelPlanJoinRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelPlanJoinRequest
     */
    omit?: TravelPlanJoinRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelPlanJoinRequestInclude<ExtArgs> | null
    /**
     * The data needed to update a TravelPlanJoinRequest.
     */
    data: XOR<TravelPlanJoinRequestUpdateInput, TravelPlanJoinRequestUncheckedUpdateInput>
    /**
     * Choose, which TravelPlanJoinRequest to update.
     */
    where: TravelPlanJoinRequestWhereUniqueInput
  }

  /**
   * TravelPlanJoinRequest updateMany
   */
  export type TravelPlanJoinRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TravelPlanJoinRequests.
     */
    data: XOR<TravelPlanJoinRequestUpdateManyMutationInput, TravelPlanJoinRequestUncheckedUpdateManyInput>
    /**
     * Filter which TravelPlanJoinRequests to update
     */
    where?: TravelPlanJoinRequestWhereInput
    /**
     * Limit how many TravelPlanJoinRequests to update.
     */
    limit?: number
  }

  /**
   * TravelPlanJoinRequest updateManyAndReturn
   */
  export type TravelPlanJoinRequestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelPlanJoinRequest
     */
    select?: TravelPlanJoinRequestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TravelPlanJoinRequest
     */
    omit?: TravelPlanJoinRequestOmit<ExtArgs> | null
    /**
     * The data used to update TravelPlanJoinRequests.
     */
    data: XOR<TravelPlanJoinRequestUpdateManyMutationInput, TravelPlanJoinRequestUncheckedUpdateManyInput>
    /**
     * Filter which TravelPlanJoinRequests to update
     */
    where?: TravelPlanJoinRequestWhereInput
    /**
     * Limit how many TravelPlanJoinRequests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelPlanJoinRequestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TravelPlanJoinRequest upsert
   */
  export type TravelPlanJoinRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelPlanJoinRequest
     */
    select?: TravelPlanJoinRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelPlanJoinRequest
     */
    omit?: TravelPlanJoinRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelPlanJoinRequestInclude<ExtArgs> | null
    /**
     * The filter to search for the TravelPlanJoinRequest to update in case it exists.
     */
    where: TravelPlanJoinRequestWhereUniqueInput
    /**
     * In case the TravelPlanJoinRequest found by the `where` argument doesn't exist, create a new TravelPlanJoinRequest with this data.
     */
    create: XOR<TravelPlanJoinRequestCreateInput, TravelPlanJoinRequestUncheckedCreateInput>
    /**
     * In case the TravelPlanJoinRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TravelPlanJoinRequestUpdateInput, TravelPlanJoinRequestUncheckedUpdateInput>
  }

  /**
   * TravelPlanJoinRequest delete
   */
  export type TravelPlanJoinRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelPlanJoinRequest
     */
    select?: TravelPlanJoinRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelPlanJoinRequest
     */
    omit?: TravelPlanJoinRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelPlanJoinRequestInclude<ExtArgs> | null
    /**
     * Filter which TravelPlanJoinRequest to delete.
     */
    where: TravelPlanJoinRequestWhereUniqueInput
  }

  /**
   * TravelPlanJoinRequest deleteMany
   */
  export type TravelPlanJoinRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TravelPlanJoinRequests to delete
     */
    where?: TravelPlanJoinRequestWhereInput
    /**
     * Limit how many TravelPlanJoinRequests to delete.
     */
    limit?: number
  }

  /**
   * TravelPlanJoinRequest without action
   */
  export type TravelPlanJoinRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelPlanJoinRequest
     */
    select?: TravelPlanJoinRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelPlanJoinRequest
     */
    omit?: TravelPlanJoinRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelPlanJoinRequestInclude<ExtArgs> | null
  }


  /**
   * Model Review
   */

  export type AggregateReview = {
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  export type ReviewAvgAggregateOutputType = {
    rating: number | null
  }

  export type ReviewSumAggregateOutputType = {
    rating: number | null
  }

  export type ReviewMinAggregateOutputType = {
    id: string | null
    reviewerId: string | null
    targetUserId: string | null
    planId: string | null
    rating: number | null
    comment: string | null
    createdAt: Date | null
  }

  export type ReviewMaxAggregateOutputType = {
    id: string | null
    reviewerId: string | null
    targetUserId: string | null
    planId: string | null
    rating: number | null
    comment: string | null
    createdAt: Date | null
  }

  export type ReviewCountAggregateOutputType = {
    id: number
    reviewerId: number
    targetUserId: number
    planId: number
    rating: number
    comment: number
    createdAt: number
    _all: number
  }


  export type ReviewAvgAggregateInputType = {
    rating?: true
  }

  export type ReviewSumAggregateInputType = {
    rating?: true
  }

  export type ReviewMinAggregateInputType = {
    id?: true
    reviewerId?: true
    targetUserId?: true
    planId?: true
    rating?: true
    comment?: true
    createdAt?: true
  }

  export type ReviewMaxAggregateInputType = {
    id?: true
    reviewerId?: true
    targetUserId?: true
    planId?: true
    rating?: true
    comment?: true
    createdAt?: true
  }

  export type ReviewCountAggregateInputType = {
    id?: true
    reviewerId?: true
    targetUserId?: true
    planId?: true
    rating?: true
    comment?: true
    createdAt?: true
    _all?: true
  }

  export type ReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Review to aggregate.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reviews
    **/
    _count?: true | ReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewMaxAggregateInputType
  }

  export type GetReviewAggregateType<T extends ReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReview[P]>
      : GetScalarType<T[P], AggregateReview[P]>
  }




  export type ReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithAggregationInput | ReviewOrderByWithAggregationInput[]
    by: ReviewScalarFieldEnum[] | ReviewScalarFieldEnum
    having?: ReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewCountAggregateInputType | true
    _avg?: ReviewAvgAggregateInputType
    _sum?: ReviewSumAggregateInputType
    _min?: ReviewMinAggregateInputType
    _max?: ReviewMaxAggregateInputType
  }

  export type ReviewGroupByOutputType = {
    id: string
    reviewerId: string
    targetUserId: string
    planId: string
    rating: number
    comment: string | null
    createdAt: Date
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  type GetReviewGroupByPayload<T extends ReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewGroupByOutputType[P]>
        }
      >
    >


  export type ReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reviewerId?: boolean
    targetUserId?: boolean
    planId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    reviewer?: boolean | UserDefaultArgs<ExtArgs>
    targetUser?: boolean | UserDefaultArgs<ExtArgs>
    plan?: boolean | TravelPlanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reviewerId?: boolean
    targetUserId?: boolean
    planId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    reviewer?: boolean | UserDefaultArgs<ExtArgs>
    targetUser?: boolean | UserDefaultArgs<ExtArgs>
    plan?: boolean | TravelPlanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reviewerId?: boolean
    targetUserId?: boolean
    planId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    reviewer?: boolean | UserDefaultArgs<ExtArgs>
    targetUser?: boolean | UserDefaultArgs<ExtArgs>
    plan?: boolean | TravelPlanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectScalar = {
    id?: boolean
    reviewerId?: boolean
    targetUserId?: boolean
    planId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
  }

  export type ReviewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "reviewerId" | "targetUserId" | "planId" | "rating" | "comment" | "createdAt", ExtArgs["result"]["review"]>
  export type ReviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reviewer?: boolean | UserDefaultArgs<ExtArgs>
    targetUser?: boolean | UserDefaultArgs<ExtArgs>
    plan?: boolean | TravelPlanDefaultArgs<ExtArgs>
  }
  export type ReviewIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reviewer?: boolean | UserDefaultArgs<ExtArgs>
    targetUser?: boolean | UserDefaultArgs<ExtArgs>
    plan?: boolean | TravelPlanDefaultArgs<ExtArgs>
  }
  export type ReviewIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reviewer?: boolean | UserDefaultArgs<ExtArgs>
    targetUser?: boolean | UserDefaultArgs<ExtArgs>
    plan?: boolean | TravelPlanDefaultArgs<ExtArgs>
  }

  export type $ReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Review"
    objects: {
      reviewer: Prisma.$UserPayload<ExtArgs>
      targetUser: Prisma.$UserPayload<ExtArgs>
      plan: Prisma.$TravelPlanPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      reviewerId: string
      targetUserId: string
      planId: string
      rating: number
      comment: string | null
      createdAt: Date
    }, ExtArgs["result"]["review"]>
    composites: {}
  }

  type ReviewGetPayload<S extends boolean | null | undefined | ReviewDefaultArgs> = $Result.GetResult<Prisma.$ReviewPayload, S>

  type ReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewCountAggregateInputType | true
    }

  export interface ReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Review'], meta: { name: 'Review' } }
    /**
     * Find zero or one Review that matches the filter.
     * @param {ReviewFindUniqueArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewFindUniqueArgs>(args: SelectSubset<T, ReviewFindUniqueArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Review that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReviewFindUniqueOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewFindFirstArgs>(args?: SelectSubset<T, ReviewFindFirstArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.review.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.review.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewWithIdOnly = await prisma.review.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReviewFindManyArgs>(args?: SelectSubset<T, ReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Review.
     * @param {ReviewCreateArgs} args - Arguments to create a Review.
     * @example
     * // Create one Review
     * const Review = await prisma.review.create({
     *   data: {
     *     // ... data to create a Review
     *   }
     * })
     * 
     */
    create<T extends ReviewCreateArgs>(args: SelectSubset<T, ReviewCreateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reviews.
     * @param {ReviewCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewCreateManyArgs>(args?: SelectSubset<T, ReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reviews and returns the data saved in the database.
     * @param {ReviewCreateManyAndReturnArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReviewCreateManyAndReturnArgs>(args?: SelectSubset<T, ReviewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Review.
     * @param {ReviewDeleteArgs} args - Arguments to delete one Review.
     * @example
     * // Delete one Review
     * const Review = await prisma.review.delete({
     *   where: {
     *     // ... filter to delete one Review
     *   }
     * })
     * 
     */
    delete<T extends ReviewDeleteArgs>(args: SelectSubset<T, ReviewDeleteArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Review.
     * @param {ReviewUpdateArgs} args - Arguments to update one Review.
     * @example
     * // Update one Review
     * const review = await prisma.review.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewUpdateArgs>(args: SelectSubset<T, ReviewUpdateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reviews.
     * @param {ReviewDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.review.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewDeleteManyArgs>(args?: SelectSubset<T, ReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewUpdateManyArgs>(args: SelectSubset<T, ReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews and returns the data updated in the database.
     * @param {ReviewUpdateManyAndReturnArgs} args - Arguments to update many Reviews.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReviewUpdateManyAndReturnArgs>(args: SelectSubset<T, ReviewUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Review.
     * @param {ReviewUpsertArgs} args - Arguments to update or create a Review.
     * @example
     * // Update or create a Review
     * const review = await prisma.review.upsert({
     *   create: {
     *     // ... data to create a Review
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Review we want to update
     *   }
     * })
     */
    upsert<T extends ReviewUpsertArgs>(args: SelectSubset<T, ReviewUpsertArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.review.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends ReviewCountArgs>(
      args?: Subset<T, ReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReviewAggregateArgs>(args: Subset<T, ReviewAggregateArgs>): Prisma.PrismaPromise<GetReviewAggregateType<T>>

    /**
     * Group by Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewGroupByArgs['orderBy'] }
        : { orderBy?: ReviewGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Review model
   */
  readonly fields: ReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Review.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reviewer<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    targetUser<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    plan<T extends TravelPlanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TravelPlanDefaultArgs<ExtArgs>>): Prisma__TravelPlanClient<$Result.GetResult<Prisma.$TravelPlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Review model
   */
  interface ReviewFieldRefs {
    readonly id: FieldRef<"Review", 'String'>
    readonly reviewerId: FieldRef<"Review", 'String'>
    readonly targetUserId: FieldRef<"Review", 'String'>
    readonly planId: FieldRef<"Review", 'String'>
    readonly rating: FieldRef<"Review", 'Int'>
    readonly comment: FieldRef<"Review", 'String'>
    readonly createdAt: FieldRef<"Review", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Review findUnique
   */
  export type ReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findUniqueOrThrow
   */
  export type ReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findFirst
   */
  export type ReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findFirstOrThrow
   */
  export type ReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findMany
   */
  export type ReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review create
   */
  export type ReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to create a Review.
     */
    data: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
  }

  /**
   * Review createMany
   */
  export type ReviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Review createManyAndReturn
   */
  export type ReviewCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Review update
   */
  export type ReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to update a Review.
     */
    data: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
    /**
     * Choose, which Review to update.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review updateMany
   */
  export type ReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
  }

  /**
   * Review updateManyAndReturn
   */
  export type ReviewUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Review upsert
   */
  export type ReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The filter to search for the Review to update in case it exists.
     */
    where: ReviewWhereUniqueInput
    /**
     * In case the Review found by the `where` argument doesn't exist, create a new Review with this data.
     */
    create: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
    /**
     * In case the Review was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
  }

  /**
   * Review delete
   */
  export type ReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter which Review to delete.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review deleteMany
   */
  export type ReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviews to delete
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to delete.
     */
    limit?: number
  }

  /**
   * Review without action
   */
  export type ReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
  }


  /**
   * Model Payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentAvgAggregateOutputType = {
    subscriptionId: number | null
    amount: number | null
  }

  export type PaymentSumAggregateOutputType = {
    subscriptionId: number | null
    amount: number | null
  }

  export type PaymentMinAggregateOutputType = {
    id: string | null
    userId: string | null
    subscriptionId: number | null
    amount: number | null
    currency: string | null
    stripeInvoiceId: string | null
    stripePaymentIntent: string | null
    status: $Enums.PaymentStatus | null
    createdAt: Date | null
  }

  export type PaymentMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    subscriptionId: number | null
    amount: number | null
    currency: string | null
    stripeInvoiceId: string | null
    stripePaymentIntent: string | null
    status: $Enums.PaymentStatus | null
    createdAt: Date | null
  }

  export type PaymentCountAggregateOutputType = {
    id: number
    userId: number
    subscriptionId: number
    amount: number
    currency: number
    stripeInvoiceId: number
    stripePaymentIntent: number
    status: number
    createdAt: number
    _all: number
  }


  export type PaymentAvgAggregateInputType = {
    subscriptionId?: true
    amount?: true
  }

  export type PaymentSumAggregateInputType = {
    subscriptionId?: true
    amount?: true
  }

  export type PaymentMinAggregateInputType = {
    id?: true
    userId?: true
    subscriptionId?: true
    amount?: true
    currency?: true
    stripeInvoiceId?: true
    stripePaymentIntent?: true
    status?: true
    createdAt?: true
  }

  export type PaymentMaxAggregateInputType = {
    id?: true
    userId?: true
    subscriptionId?: true
    amount?: true
    currency?: true
    stripeInvoiceId?: true
    stripePaymentIntent?: true
    status?: true
    createdAt?: true
  }

  export type PaymentCountAggregateInputType = {
    id?: true
    userId?: true
    subscriptionId?: true
    amount?: true
    currency?: true
    stripeInvoiceId?: true
    stripePaymentIntent?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payment to aggregate.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }




  export type PaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithAggregationInput | PaymentOrderByWithAggregationInput[]
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum
    having?: PaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCountAggregateInputType | true
    _avg?: PaymentAvgAggregateInputType
    _sum?: PaymentSumAggregateInputType
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }

  export type PaymentGroupByOutputType = {
    id: string
    userId: string
    subscriptionId: number | null
    amount: number
    currency: string
    stripeInvoiceId: string
    stripePaymentIntent: string | null
    status: $Enums.PaymentStatus
    createdAt: Date
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
        }
      >
    >


  export type PaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    subscriptionId?: boolean
    amount?: boolean
    currency?: boolean
    stripeInvoiceId?: boolean
    stripePaymentIntent?: boolean
    status?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    subscription?: boolean | Payment$subscriptionArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    subscriptionId?: boolean
    amount?: boolean
    currency?: boolean
    stripeInvoiceId?: boolean
    stripePaymentIntent?: boolean
    status?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    subscription?: boolean | Payment$subscriptionArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    subscriptionId?: boolean
    amount?: boolean
    currency?: boolean
    stripeInvoiceId?: boolean
    stripePaymentIntent?: boolean
    status?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    subscription?: boolean | Payment$subscriptionArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectScalar = {
    id?: boolean
    userId?: boolean
    subscriptionId?: boolean
    amount?: boolean
    currency?: boolean
    stripeInvoiceId?: boolean
    stripePaymentIntent?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type PaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "subscriptionId" | "amount" | "currency" | "stripeInvoiceId" | "stripePaymentIntent" | "status" | "createdAt", ExtArgs["result"]["payment"]>
  export type PaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    subscription?: boolean | Payment$subscriptionArgs<ExtArgs>
  }
  export type PaymentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    subscription?: boolean | Payment$subscriptionArgs<ExtArgs>
  }
  export type PaymentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    subscription?: boolean | Payment$subscriptionArgs<ExtArgs>
  }

  export type $PaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payment"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      subscription: Prisma.$SubscriptionPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      subscriptionId: number | null
      amount: number
      currency: string
      stripeInvoiceId: string
      stripePaymentIntent: string | null
      status: $Enums.PaymentStatus
      createdAt: Date
    }, ExtArgs["result"]["payment"]>
    composites: {}
  }

  type PaymentGetPayload<S extends boolean | null | undefined | PaymentDefaultArgs> = $Result.GetResult<Prisma.$PaymentPayload, S>

  type PaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentCountAggregateInputType | true
    }

  export interface PaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payment'], meta: { name: 'Payment' } }
    /**
     * Find zero or one Payment that matches the filter.
     * @param {PaymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentFindUniqueArgs>(args: SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentFindFirstArgs>(args?: SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentWithIdOnly = await prisma.payment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentFindManyArgs>(args?: SelectSubset<T, PaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payment.
     * @param {PaymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     * 
     */
    create<T extends PaymentCreateArgs>(args: SelectSubset<T, PaymentCreateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {PaymentCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentCreateManyArgs>(args?: SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payments and returns the data saved in the database.
     * @param {PaymentCreateManyAndReturnArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Payment.
     * @param {PaymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     * 
     */
    delete<T extends PaymentDeleteArgs>(args: SelectSubset<T, PaymentDeleteArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payment.
     * @param {PaymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentUpdateArgs>(args: SelectSubset<T, PaymentUpdateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {PaymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentDeleteManyArgs>(args?: SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentUpdateManyArgs>(args: SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments and returns the data updated in the database.
     * @param {PaymentUpdateManyAndReturnArgs} args - Arguments to update many Payments.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PaymentUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Payment.
     * @param {PaymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     */
    upsert<T extends PaymentUpsertArgs>(args: SelectSubset<T, PaymentUpsertArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentCountArgs>(
      args?: Subset<T, PaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentGroupByArgs['orderBy'] }
        : { orderBy?: PaymentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payment model
   */
  readonly fields: PaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    subscription<T extends Payment$subscriptionArgs<ExtArgs> = {}>(args?: Subset<T, Payment$subscriptionArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Payment model
   */
  interface PaymentFieldRefs {
    readonly id: FieldRef<"Payment", 'String'>
    readonly userId: FieldRef<"Payment", 'String'>
    readonly subscriptionId: FieldRef<"Payment", 'Int'>
    readonly amount: FieldRef<"Payment", 'Float'>
    readonly currency: FieldRef<"Payment", 'String'>
    readonly stripeInvoiceId: FieldRef<"Payment", 'String'>
    readonly stripePaymentIntent: FieldRef<"Payment", 'String'>
    readonly status: FieldRef<"Payment", 'PaymentStatus'>
    readonly createdAt: FieldRef<"Payment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Payment findUnique
   */
  export type PaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findUniqueOrThrow
   */
  export type PaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findFirst
   */
  export type PaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findFirstOrThrow
   */
  export type PaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findMany
   */
  export type PaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment create
   */
  export type PaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a Payment.
     */
    data: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
  }

  /**
   * Payment createMany
   */
  export type PaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payment createManyAndReturn
   */
  export type PaymentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment update
   */
  export type PaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a Payment.
     */
    data: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
    /**
     * Choose, which Payment to update.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment updateMany
   */
  export type PaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
  }

  /**
   * Payment updateManyAndReturn
   */
  export type PaymentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment upsert
   */
  export type PaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the Payment to update in case it exists.
     */
    where: PaymentWhereUniqueInput
    /**
     * In case the Payment found by the `where` argument doesn't exist, create a new Payment with this data.
     */
    create: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
    /**
     * In case the Payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
  }

  /**
   * Payment delete
   */
  export type PaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter which Payment to delete.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment deleteMany
   */
  export type PaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to delete.
     */
    limit?: number
  }

  /**
   * Payment.subscription
   */
  export type Payment$subscriptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    where?: SubscriptionWhereInput
  }

  /**
   * Payment without action
   */
  export type PaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
  }


  /**
   * Model Subscription
   */

  export type AggregateSubscription = {
    _count: SubscriptionCountAggregateOutputType | null
    _avg: SubscriptionAvgAggregateOutputType | null
    _sum: SubscriptionSumAggregateOutputType | null
    _min: SubscriptionMinAggregateOutputType | null
    _max: SubscriptionMaxAggregateOutputType | null
  }

  export type SubscriptionAvgAggregateOutputType = {
    id: number | null
  }

  export type SubscriptionSumAggregateOutputType = {
    id: number | null
  }

  export type SubscriptionMinAggregateOutputType = {
    id: number | null
    userId: string | null
    stripeCustomerId: string | null
    stripeSubscriptionId: string | null
    status: $Enums.SubscriptionStatus | null
    plan: $Enums.PlanType | null
    currentPeriodEnd: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubscriptionMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    stripeCustomerId: string | null
    stripeSubscriptionId: string | null
    status: $Enums.SubscriptionStatus | null
    plan: $Enums.PlanType | null
    currentPeriodEnd: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubscriptionCountAggregateOutputType = {
    id: number
    userId: number
    stripeCustomerId: number
    stripeSubscriptionId: number
    status: number
    plan: number
    currentPeriodEnd: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SubscriptionAvgAggregateInputType = {
    id?: true
  }

  export type SubscriptionSumAggregateInputType = {
    id?: true
  }

  export type SubscriptionMinAggregateInputType = {
    id?: true
    userId?: true
    stripeCustomerId?: true
    stripeSubscriptionId?: true
    status?: true
    plan?: true
    currentPeriodEnd?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubscriptionMaxAggregateInputType = {
    id?: true
    userId?: true
    stripeCustomerId?: true
    stripeSubscriptionId?: true
    status?: true
    plan?: true
    currentPeriodEnd?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubscriptionCountAggregateInputType = {
    id?: true
    userId?: true
    stripeCustomerId?: true
    stripeSubscriptionId?: true
    status?: true
    plan?: true
    currentPeriodEnd?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SubscriptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subscription to aggregate.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Subscriptions
    **/
    _count?: true | SubscriptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubscriptionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubscriptionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubscriptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubscriptionMaxAggregateInputType
  }

  export type GetSubscriptionAggregateType<T extends SubscriptionAggregateArgs> = {
        [P in keyof T & keyof AggregateSubscription]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubscription[P]>
      : GetScalarType<T[P], AggregateSubscription[P]>
  }




  export type SubscriptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionWhereInput
    orderBy?: SubscriptionOrderByWithAggregationInput | SubscriptionOrderByWithAggregationInput[]
    by: SubscriptionScalarFieldEnum[] | SubscriptionScalarFieldEnum
    having?: SubscriptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubscriptionCountAggregateInputType | true
    _avg?: SubscriptionAvgAggregateInputType
    _sum?: SubscriptionSumAggregateInputType
    _min?: SubscriptionMinAggregateInputType
    _max?: SubscriptionMaxAggregateInputType
  }

  export type SubscriptionGroupByOutputType = {
    id: number
    userId: string
    stripeCustomerId: string
    stripeSubscriptionId: string
    status: $Enums.SubscriptionStatus
    plan: $Enums.PlanType
    currentPeriodEnd: Date
    createdAt: Date
    updatedAt: Date
    _count: SubscriptionCountAggregateOutputType | null
    _avg: SubscriptionAvgAggregateOutputType | null
    _sum: SubscriptionSumAggregateOutputType | null
    _min: SubscriptionMinAggregateOutputType | null
    _max: SubscriptionMaxAggregateOutputType | null
  }

  type GetSubscriptionGroupByPayload<T extends SubscriptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubscriptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubscriptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubscriptionGroupByOutputType[P]>
            : GetScalarType<T[P], SubscriptionGroupByOutputType[P]>
        }
      >
    >


  export type SubscriptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    stripeCustomerId?: boolean
    stripeSubscriptionId?: boolean
    status?: boolean
    plan?: boolean
    currentPeriodEnd?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    payments?: boolean | Subscription$paymentsArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | SubscriptionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscription"]>

  export type SubscriptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    stripeCustomerId?: boolean
    stripeSubscriptionId?: boolean
    status?: boolean
    plan?: boolean
    currentPeriodEnd?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscription"]>

  export type SubscriptionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    stripeCustomerId?: boolean
    stripeSubscriptionId?: boolean
    status?: boolean
    plan?: boolean
    currentPeriodEnd?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscription"]>

  export type SubscriptionSelectScalar = {
    id?: boolean
    userId?: boolean
    stripeCustomerId?: boolean
    stripeSubscriptionId?: boolean
    status?: boolean
    plan?: boolean
    currentPeriodEnd?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SubscriptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "stripeCustomerId" | "stripeSubscriptionId" | "status" | "plan" | "currentPeriodEnd" | "createdAt" | "updatedAt", ExtArgs["result"]["subscription"]>
  export type SubscriptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payments?: boolean | Subscription$paymentsArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | SubscriptionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SubscriptionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SubscriptionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SubscriptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Subscription"
    objects: {
      payments: Prisma.$PaymentPayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: string
      stripeCustomerId: string
      stripeSubscriptionId: string
      status: $Enums.SubscriptionStatus
      plan: $Enums.PlanType
      currentPeriodEnd: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["subscription"]>
    composites: {}
  }

  type SubscriptionGetPayload<S extends boolean | null | undefined | SubscriptionDefaultArgs> = $Result.GetResult<Prisma.$SubscriptionPayload, S>

  type SubscriptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubscriptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubscriptionCountAggregateInputType | true
    }

  export interface SubscriptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Subscription'], meta: { name: 'Subscription' } }
    /**
     * Find zero or one Subscription that matches the filter.
     * @param {SubscriptionFindUniqueArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubscriptionFindUniqueArgs>(args: SelectSubset<T, SubscriptionFindUniqueArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Subscription that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubscriptionFindUniqueOrThrowArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubscriptionFindUniqueOrThrowArgs>(args: SelectSubset<T, SubscriptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subscription that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindFirstArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubscriptionFindFirstArgs>(args?: SelectSubset<T, SubscriptionFindFirstArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subscription that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindFirstOrThrowArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubscriptionFindFirstOrThrowArgs>(args?: SelectSubset<T, SubscriptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Subscriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subscriptions
     * const subscriptions = await prisma.subscription.findMany()
     * 
     * // Get first 10 Subscriptions
     * const subscriptions = await prisma.subscription.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubscriptionFindManyArgs>(args?: SelectSubset<T, SubscriptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Subscription.
     * @param {SubscriptionCreateArgs} args - Arguments to create a Subscription.
     * @example
     * // Create one Subscription
     * const Subscription = await prisma.subscription.create({
     *   data: {
     *     // ... data to create a Subscription
     *   }
     * })
     * 
     */
    create<T extends SubscriptionCreateArgs>(args: SelectSubset<T, SubscriptionCreateArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Subscriptions.
     * @param {SubscriptionCreateManyArgs} args - Arguments to create many Subscriptions.
     * @example
     * // Create many Subscriptions
     * const subscription = await prisma.subscription.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubscriptionCreateManyArgs>(args?: SelectSubset<T, SubscriptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Subscriptions and returns the data saved in the database.
     * @param {SubscriptionCreateManyAndReturnArgs} args - Arguments to create many Subscriptions.
     * @example
     * // Create many Subscriptions
     * const subscription = await prisma.subscription.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Subscriptions and only return the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubscriptionCreateManyAndReturnArgs>(args?: SelectSubset<T, SubscriptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Subscription.
     * @param {SubscriptionDeleteArgs} args - Arguments to delete one Subscription.
     * @example
     * // Delete one Subscription
     * const Subscription = await prisma.subscription.delete({
     *   where: {
     *     // ... filter to delete one Subscription
     *   }
     * })
     * 
     */
    delete<T extends SubscriptionDeleteArgs>(args: SelectSubset<T, SubscriptionDeleteArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Subscription.
     * @param {SubscriptionUpdateArgs} args - Arguments to update one Subscription.
     * @example
     * // Update one Subscription
     * const subscription = await prisma.subscription.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubscriptionUpdateArgs>(args: SelectSubset<T, SubscriptionUpdateArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Subscriptions.
     * @param {SubscriptionDeleteManyArgs} args - Arguments to filter Subscriptions to delete.
     * @example
     * // Delete a few Subscriptions
     * const { count } = await prisma.subscription.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubscriptionDeleteManyArgs>(args?: SelectSubset<T, SubscriptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subscriptions
     * const subscription = await prisma.subscription.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubscriptionUpdateManyArgs>(args: SelectSubset<T, SubscriptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subscriptions and returns the data updated in the database.
     * @param {SubscriptionUpdateManyAndReturnArgs} args - Arguments to update many Subscriptions.
     * @example
     * // Update many Subscriptions
     * const subscription = await prisma.subscription.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Subscriptions and only return the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SubscriptionUpdateManyAndReturnArgs>(args: SelectSubset<T, SubscriptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Subscription.
     * @param {SubscriptionUpsertArgs} args - Arguments to update or create a Subscription.
     * @example
     * // Update or create a Subscription
     * const subscription = await prisma.subscription.upsert({
     *   create: {
     *     // ... data to create a Subscription
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subscription we want to update
     *   }
     * })
     */
    upsert<T extends SubscriptionUpsertArgs>(args: SelectSubset<T, SubscriptionUpsertArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionCountArgs} args - Arguments to filter Subscriptions to count.
     * @example
     * // Count the number of Subscriptions
     * const count = await prisma.subscription.count({
     *   where: {
     *     // ... the filter for the Subscriptions we want to count
     *   }
     * })
    **/
    count<T extends SubscriptionCountArgs>(
      args?: Subset<T, SubscriptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubscriptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SubscriptionAggregateArgs>(args: Subset<T, SubscriptionAggregateArgs>): Prisma.PrismaPromise<GetSubscriptionAggregateType<T>>

    /**
     * Group by Subscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SubscriptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubscriptionGroupByArgs['orderBy'] }
        : { orderBy?: SubscriptionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SubscriptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubscriptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Subscription model
   */
  readonly fields: SubscriptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Subscription.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubscriptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    payments<T extends Subscription$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, Subscription$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Subscription model
   */
  interface SubscriptionFieldRefs {
    readonly id: FieldRef<"Subscription", 'Int'>
    readonly userId: FieldRef<"Subscription", 'String'>
    readonly stripeCustomerId: FieldRef<"Subscription", 'String'>
    readonly stripeSubscriptionId: FieldRef<"Subscription", 'String'>
    readonly status: FieldRef<"Subscription", 'SubscriptionStatus'>
    readonly plan: FieldRef<"Subscription", 'PlanType'>
    readonly currentPeriodEnd: FieldRef<"Subscription", 'DateTime'>
    readonly createdAt: FieldRef<"Subscription", 'DateTime'>
    readonly updatedAt: FieldRef<"Subscription", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Subscription findUnique
   */
  export type SubscriptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription findUniqueOrThrow
   */
  export type SubscriptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription findFirst
   */
  export type SubscriptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscriptions.
     */
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription findFirstOrThrow
   */
  export type SubscriptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscriptions.
     */
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription findMany
   */
  export type SubscriptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscriptions to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription create
   */
  export type SubscriptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to create a Subscription.
     */
    data: XOR<SubscriptionCreateInput, SubscriptionUncheckedCreateInput>
  }

  /**
   * Subscription createMany
   */
  export type SubscriptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Subscriptions.
     */
    data: SubscriptionCreateManyInput | SubscriptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Subscription createManyAndReturn
   */
  export type SubscriptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * The data used to create many Subscriptions.
     */
    data: SubscriptionCreateManyInput | SubscriptionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Subscription update
   */
  export type SubscriptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to update a Subscription.
     */
    data: XOR<SubscriptionUpdateInput, SubscriptionUncheckedUpdateInput>
    /**
     * Choose, which Subscription to update.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription updateMany
   */
  export type SubscriptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Subscriptions.
     */
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which Subscriptions to update
     */
    where?: SubscriptionWhereInput
    /**
     * Limit how many Subscriptions to update.
     */
    limit?: number
  }

  /**
   * Subscription updateManyAndReturn
   */
  export type SubscriptionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * The data used to update Subscriptions.
     */
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which Subscriptions to update
     */
    where?: SubscriptionWhereInput
    /**
     * Limit how many Subscriptions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Subscription upsert
   */
  export type SubscriptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The filter to search for the Subscription to update in case it exists.
     */
    where: SubscriptionWhereUniqueInput
    /**
     * In case the Subscription found by the `where` argument doesn't exist, create a new Subscription with this data.
     */
    create: XOR<SubscriptionCreateInput, SubscriptionUncheckedCreateInput>
    /**
     * In case the Subscription was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubscriptionUpdateInput, SubscriptionUncheckedUpdateInput>
  }

  /**
   * Subscription delete
   */
  export type SubscriptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter which Subscription to delete.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription deleteMany
   */
  export type SubscriptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subscriptions to delete
     */
    where?: SubscriptionWhereInput
    /**
     * Limit how many Subscriptions to delete.
     */
    limit?: number
  }

  /**
   * Subscription.payments
   */
  export type Subscription$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Subscription without action
   */
  export type SubscriptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    role: 'role',
    bio: 'bio',
    profileImage: 'profileImage',
    currentLocation: 'currentLocation',
    gender: 'gender',
    interests: 'interests',
    visitedCountries: 'visitedCountries',
    verifiedBadge: 'verifiedBadge',
    status: 'status',
    createdTravelPlans: 'createdTravelPlans',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const TravelPlanScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    destination: 'destination',
    startDate: 'startDate',
    endDate: 'endDate',
    budgetRange: 'budgetRange',
    travelType: 'travelType',
    description: 'description',
    visibility: 'visibility',
    isDeleted: 'isDeleted',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TravelPlanScalarFieldEnum = (typeof TravelPlanScalarFieldEnum)[keyof typeof TravelPlanScalarFieldEnum]


  export const TravelPlanParticipantScalarFieldEnum: {
    id: 'id',
    planId: 'planId',
    userId: 'userId',
    joinedAt: 'joinedAt',
    status: 'status'
  };

  export type TravelPlanParticipantScalarFieldEnum = (typeof TravelPlanParticipantScalarFieldEnum)[keyof typeof TravelPlanParticipantScalarFieldEnum]


  export const TravelPlanJoinRequestScalarFieldEnum: {
    id: 'id',
    planId: 'planId',
    requesterId: 'requesterId',
    status: 'status'
  };

  export type TravelPlanJoinRequestScalarFieldEnum = (typeof TravelPlanJoinRequestScalarFieldEnum)[keyof typeof TravelPlanJoinRequestScalarFieldEnum]


  export const ReviewScalarFieldEnum: {
    id: 'id',
    reviewerId: 'reviewerId',
    targetUserId: 'targetUserId',
    planId: 'planId',
    rating: 'rating',
    comment: 'comment',
    createdAt: 'createdAt'
  };

  export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum]


  export const PaymentScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    subscriptionId: 'subscriptionId',
    amount: 'amount',
    currency: 'currency',
    stripeInvoiceId: 'stripeInvoiceId',
    stripePaymentIntent: 'stripePaymentIntent',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


  export const SubscriptionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    stripeCustomerId: 'stripeCustomerId',
    stripeSubscriptionId: 'stripeSubscriptionId',
    status: 'status',
    plan: 'plan',
    currentPeriodEnd: 'currentPeriodEnd',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SubscriptionScalarFieldEnum = (typeof SubscriptionScalarFieldEnum)[keyof typeof SubscriptionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'Gender'
   */
  export type EnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender'>
    


  /**
   * Reference to a field of type 'Gender[]'
   */
  export type ListEnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'UserStatus'
   */
  export type EnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus'>
    


  /**
   * Reference to a field of type 'UserStatus[]'
   */
  export type ListEnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'TravelType'
   */
  export type EnumTravelTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TravelType'>
    


  /**
   * Reference to a field of type 'TravelType[]'
   */
  export type ListEnumTravelTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TravelType[]'>
    


  /**
   * Reference to a field of type 'ParticipantStatus'
   */
  export type EnumParticipantStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ParticipantStatus'>
    


  /**
   * Reference to a field of type 'ParticipantStatus[]'
   */
  export type ListEnumParticipantStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ParticipantStatus[]'>
    


  /**
   * Reference to a field of type 'JoinStatus'
   */
  export type EnumJoinStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'JoinStatus'>
    


  /**
   * Reference to a field of type 'JoinStatus[]'
   */
  export type ListEnumJoinStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'JoinStatus[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'PaymentStatus'
   */
  export type EnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus'>
    


  /**
   * Reference to a field of type 'PaymentStatus[]'
   */
  export type ListEnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus[]'>
    


  /**
   * Reference to a field of type 'SubscriptionStatus'
   */
  export type EnumSubscriptionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubscriptionStatus'>
    


  /**
   * Reference to a field of type 'SubscriptionStatus[]'
   */
  export type ListEnumSubscriptionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubscriptionStatus[]'>
    


  /**
   * Reference to a field of type 'PlanType'
   */
  export type EnumPlanTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PlanType'>
    


  /**
   * Reference to a field of type 'PlanType[]'
   */
  export type ListEnumPlanTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PlanType[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    bio?: StringNullableFilter<"User"> | string | null
    profileImage?: StringNullableFilter<"User"> | string | null
    currentLocation?: StringNullableFilter<"User"> | string | null
    gender?: EnumGenderFilter<"User"> | $Enums.Gender
    interests?: StringNullableListFilter<"User">
    visitedCountries?: StringNullableListFilter<"User">
    verifiedBadge?: BoolFilter<"User"> | boolean
    status?: EnumUserStatusFilter<"User"> | $Enums.UserStatus
    createdTravelPlans?: StringNullableListFilter<"User">
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    travelPlans?: TravelPlanListRelationFilter
    joinRequests?: TravelPlanJoinRequestListRelationFilter
    participants?: TravelPlanParticipantListRelationFilter
    givenReviews?: ReviewListRelationFilter
    receivedReviews?: ReviewListRelationFilter
    payments?: PaymentListRelationFilter
    subscription?: XOR<SubscriptionNullableScalarRelationFilter, SubscriptionWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    bio?: SortOrderInput | SortOrder
    profileImage?: SortOrderInput | SortOrder
    currentLocation?: SortOrderInput | SortOrder
    gender?: SortOrder
    interests?: SortOrder
    visitedCountries?: SortOrder
    verifiedBadge?: SortOrder
    status?: SortOrder
    createdTravelPlans?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    travelPlans?: TravelPlanOrderByRelationAggregateInput
    joinRequests?: TravelPlanJoinRequestOrderByRelationAggregateInput
    participants?: TravelPlanParticipantOrderByRelationAggregateInput
    givenReviews?: ReviewOrderByRelationAggregateInput
    receivedReviews?: ReviewOrderByRelationAggregateInput
    payments?: PaymentOrderByRelationAggregateInput
    subscription?: SubscriptionOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    bio?: StringNullableFilter<"User"> | string | null
    profileImage?: StringNullableFilter<"User"> | string | null
    currentLocation?: StringNullableFilter<"User"> | string | null
    gender?: EnumGenderFilter<"User"> | $Enums.Gender
    interests?: StringNullableListFilter<"User">
    visitedCountries?: StringNullableListFilter<"User">
    verifiedBadge?: BoolFilter<"User"> | boolean
    status?: EnumUserStatusFilter<"User"> | $Enums.UserStatus
    createdTravelPlans?: StringNullableListFilter<"User">
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    travelPlans?: TravelPlanListRelationFilter
    joinRequests?: TravelPlanJoinRequestListRelationFilter
    participants?: TravelPlanParticipantListRelationFilter
    givenReviews?: ReviewListRelationFilter
    receivedReviews?: ReviewListRelationFilter
    payments?: PaymentListRelationFilter
    subscription?: XOR<SubscriptionNullableScalarRelationFilter, SubscriptionWhereInput> | null
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    bio?: SortOrderInput | SortOrder
    profileImage?: SortOrderInput | SortOrder
    currentLocation?: SortOrderInput | SortOrder
    gender?: SortOrder
    interests?: SortOrder
    visitedCountries?: SortOrder
    verifiedBadge?: SortOrder
    status?: SortOrder
    createdTravelPlans?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    bio?: StringNullableWithAggregatesFilter<"User"> | string | null
    profileImage?: StringNullableWithAggregatesFilter<"User"> | string | null
    currentLocation?: StringNullableWithAggregatesFilter<"User"> | string | null
    gender?: EnumGenderWithAggregatesFilter<"User"> | $Enums.Gender
    interests?: StringNullableListFilter<"User">
    visitedCountries?: StringNullableListFilter<"User">
    verifiedBadge?: BoolWithAggregatesFilter<"User"> | boolean
    status?: EnumUserStatusWithAggregatesFilter<"User"> | $Enums.UserStatus
    createdTravelPlans?: StringNullableListFilter<"User">
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type TravelPlanWhereInput = {
    AND?: TravelPlanWhereInput | TravelPlanWhereInput[]
    OR?: TravelPlanWhereInput[]
    NOT?: TravelPlanWhereInput | TravelPlanWhereInput[]
    id?: StringFilter<"TravelPlan"> | string
    userId?: StringFilter<"TravelPlan"> | string
    destination?: StringFilter<"TravelPlan"> | string
    startDate?: DateTimeFilter<"TravelPlan"> | Date | string
    endDate?: DateTimeFilter<"TravelPlan"> | Date | string
    budgetRange?: StringNullableFilter<"TravelPlan"> | string | null
    travelType?: EnumTravelTypeFilter<"TravelPlan"> | $Enums.TravelType
    description?: StringNullableFilter<"TravelPlan"> | string | null
    visibility?: BoolFilter<"TravelPlan"> | boolean
    isDeleted?: BoolFilter<"TravelPlan"> | boolean
    createdAt?: DateTimeFilter<"TravelPlan"> | Date | string
    updatedAt?: DateTimeFilter<"TravelPlan"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    participants?: TravelPlanParticipantListRelationFilter
    joinRequests?: TravelPlanJoinRequestListRelationFilter
    reviews?: ReviewListRelationFilter
  }

  export type TravelPlanOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    destination?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    budgetRange?: SortOrderInput | SortOrder
    travelType?: SortOrder
    description?: SortOrderInput | SortOrder
    visibility?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    participants?: TravelPlanParticipantOrderByRelationAggregateInput
    joinRequests?: TravelPlanJoinRequestOrderByRelationAggregateInput
    reviews?: ReviewOrderByRelationAggregateInput
  }

  export type TravelPlanWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TravelPlanWhereInput | TravelPlanWhereInput[]
    OR?: TravelPlanWhereInput[]
    NOT?: TravelPlanWhereInput | TravelPlanWhereInput[]
    userId?: StringFilter<"TravelPlan"> | string
    destination?: StringFilter<"TravelPlan"> | string
    startDate?: DateTimeFilter<"TravelPlan"> | Date | string
    endDate?: DateTimeFilter<"TravelPlan"> | Date | string
    budgetRange?: StringNullableFilter<"TravelPlan"> | string | null
    travelType?: EnumTravelTypeFilter<"TravelPlan"> | $Enums.TravelType
    description?: StringNullableFilter<"TravelPlan"> | string | null
    visibility?: BoolFilter<"TravelPlan"> | boolean
    isDeleted?: BoolFilter<"TravelPlan"> | boolean
    createdAt?: DateTimeFilter<"TravelPlan"> | Date | string
    updatedAt?: DateTimeFilter<"TravelPlan"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    participants?: TravelPlanParticipantListRelationFilter
    joinRequests?: TravelPlanJoinRequestListRelationFilter
    reviews?: ReviewListRelationFilter
  }, "id">

  export type TravelPlanOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    destination?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    budgetRange?: SortOrderInput | SortOrder
    travelType?: SortOrder
    description?: SortOrderInput | SortOrder
    visibility?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TravelPlanCountOrderByAggregateInput
    _max?: TravelPlanMaxOrderByAggregateInput
    _min?: TravelPlanMinOrderByAggregateInput
  }

  export type TravelPlanScalarWhereWithAggregatesInput = {
    AND?: TravelPlanScalarWhereWithAggregatesInput | TravelPlanScalarWhereWithAggregatesInput[]
    OR?: TravelPlanScalarWhereWithAggregatesInput[]
    NOT?: TravelPlanScalarWhereWithAggregatesInput | TravelPlanScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TravelPlan"> | string
    userId?: StringWithAggregatesFilter<"TravelPlan"> | string
    destination?: StringWithAggregatesFilter<"TravelPlan"> | string
    startDate?: DateTimeWithAggregatesFilter<"TravelPlan"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"TravelPlan"> | Date | string
    budgetRange?: StringNullableWithAggregatesFilter<"TravelPlan"> | string | null
    travelType?: EnumTravelTypeWithAggregatesFilter<"TravelPlan"> | $Enums.TravelType
    description?: StringNullableWithAggregatesFilter<"TravelPlan"> | string | null
    visibility?: BoolWithAggregatesFilter<"TravelPlan"> | boolean
    isDeleted?: BoolWithAggregatesFilter<"TravelPlan"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"TravelPlan"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TravelPlan"> | Date | string
  }

  export type TravelPlanParticipantWhereInput = {
    AND?: TravelPlanParticipantWhereInput | TravelPlanParticipantWhereInput[]
    OR?: TravelPlanParticipantWhereInput[]
    NOT?: TravelPlanParticipantWhereInput | TravelPlanParticipantWhereInput[]
    id?: StringFilter<"TravelPlanParticipant"> | string
    planId?: StringFilter<"TravelPlanParticipant"> | string
    userId?: StringFilter<"TravelPlanParticipant"> | string
    joinedAt?: DateTimeFilter<"TravelPlanParticipant"> | Date | string
    status?: EnumParticipantStatusFilter<"TravelPlanParticipant"> | $Enums.ParticipantStatus
    plan?: XOR<TravelPlanScalarRelationFilter, TravelPlanWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type TravelPlanParticipantOrderByWithRelationInput = {
    id?: SortOrder
    planId?: SortOrder
    userId?: SortOrder
    joinedAt?: SortOrder
    status?: SortOrder
    plan?: TravelPlanOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type TravelPlanParticipantWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    planId_userId?: TravelPlanParticipantPlanIdUserIdCompoundUniqueInput
    AND?: TravelPlanParticipantWhereInput | TravelPlanParticipantWhereInput[]
    OR?: TravelPlanParticipantWhereInput[]
    NOT?: TravelPlanParticipantWhereInput | TravelPlanParticipantWhereInput[]
    planId?: StringFilter<"TravelPlanParticipant"> | string
    userId?: StringFilter<"TravelPlanParticipant"> | string
    joinedAt?: DateTimeFilter<"TravelPlanParticipant"> | Date | string
    status?: EnumParticipantStatusFilter<"TravelPlanParticipant"> | $Enums.ParticipantStatus
    plan?: XOR<TravelPlanScalarRelationFilter, TravelPlanWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "planId_userId">

  export type TravelPlanParticipantOrderByWithAggregationInput = {
    id?: SortOrder
    planId?: SortOrder
    userId?: SortOrder
    joinedAt?: SortOrder
    status?: SortOrder
    _count?: TravelPlanParticipantCountOrderByAggregateInput
    _max?: TravelPlanParticipantMaxOrderByAggregateInput
    _min?: TravelPlanParticipantMinOrderByAggregateInput
  }

  export type TravelPlanParticipantScalarWhereWithAggregatesInput = {
    AND?: TravelPlanParticipantScalarWhereWithAggregatesInput | TravelPlanParticipantScalarWhereWithAggregatesInput[]
    OR?: TravelPlanParticipantScalarWhereWithAggregatesInput[]
    NOT?: TravelPlanParticipantScalarWhereWithAggregatesInput | TravelPlanParticipantScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TravelPlanParticipant"> | string
    planId?: StringWithAggregatesFilter<"TravelPlanParticipant"> | string
    userId?: StringWithAggregatesFilter<"TravelPlanParticipant"> | string
    joinedAt?: DateTimeWithAggregatesFilter<"TravelPlanParticipant"> | Date | string
    status?: EnumParticipantStatusWithAggregatesFilter<"TravelPlanParticipant"> | $Enums.ParticipantStatus
  }

  export type TravelPlanJoinRequestWhereInput = {
    AND?: TravelPlanJoinRequestWhereInput | TravelPlanJoinRequestWhereInput[]
    OR?: TravelPlanJoinRequestWhereInput[]
    NOT?: TravelPlanJoinRequestWhereInput | TravelPlanJoinRequestWhereInput[]
    id?: StringFilter<"TravelPlanJoinRequest"> | string
    planId?: StringFilter<"TravelPlanJoinRequest"> | string
    requesterId?: StringFilter<"TravelPlanJoinRequest"> | string
    status?: EnumJoinStatusFilter<"TravelPlanJoinRequest"> | $Enums.JoinStatus
    plan?: XOR<TravelPlanScalarRelationFilter, TravelPlanWhereInput>
    requester?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type TravelPlanJoinRequestOrderByWithRelationInput = {
    id?: SortOrder
    planId?: SortOrder
    requesterId?: SortOrder
    status?: SortOrder
    plan?: TravelPlanOrderByWithRelationInput
    requester?: UserOrderByWithRelationInput
  }

  export type TravelPlanJoinRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TravelPlanJoinRequestWhereInput | TravelPlanJoinRequestWhereInput[]
    OR?: TravelPlanJoinRequestWhereInput[]
    NOT?: TravelPlanJoinRequestWhereInput | TravelPlanJoinRequestWhereInput[]
    planId?: StringFilter<"TravelPlanJoinRequest"> | string
    requesterId?: StringFilter<"TravelPlanJoinRequest"> | string
    status?: EnumJoinStatusFilter<"TravelPlanJoinRequest"> | $Enums.JoinStatus
    plan?: XOR<TravelPlanScalarRelationFilter, TravelPlanWhereInput>
    requester?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type TravelPlanJoinRequestOrderByWithAggregationInput = {
    id?: SortOrder
    planId?: SortOrder
    requesterId?: SortOrder
    status?: SortOrder
    _count?: TravelPlanJoinRequestCountOrderByAggregateInput
    _max?: TravelPlanJoinRequestMaxOrderByAggregateInput
    _min?: TravelPlanJoinRequestMinOrderByAggregateInput
  }

  export type TravelPlanJoinRequestScalarWhereWithAggregatesInput = {
    AND?: TravelPlanJoinRequestScalarWhereWithAggregatesInput | TravelPlanJoinRequestScalarWhereWithAggregatesInput[]
    OR?: TravelPlanJoinRequestScalarWhereWithAggregatesInput[]
    NOT?: TravelPlanJoinRequestScalarWhereWithAggregatesInput | TravelPlanJoinRequestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TravelPlanJoinRequest"> | string
    planId?: StringWithAggregatesFilter<"TravelPlanJoinRequest"> | string
    requesterId?: StringWithAggregatesFilter<"TravelPlanJoinRequest"> | string
    status?: EnumJoinStatusWithAggregatesFilter<"TravelPlanJoinRequest"> | $Enums.JoinStatus
  }

  export type ReviewWhereInput = {
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    id?: StringFilter<"Review"> | string
    reviewerId?: StringFilter<"Review"> | string
    targetUserId?: StringFilter<"Review"> | string
    planId?: StringFilter<"Review"> | string
    rating?: IntFilter<"Review"> | number
    comment?: StringNullableFilter<"Review"> | string | null
    createdAt?: DateTimeFilter<"Review"> | Date | string
    reviewer?: XOR<UserScalarRelationFilter, UserWhereInput>
    targetUser?: XOR<UserScalarRelationFilter, UserWhereInput>
    plan?: XOR<TravelPlanScalarRelationFilter, TravelPlanWhereInput>
  }

  export type ReviewOrderByWithRelationInput = {
    id?: SortOrder
    reviewerId?: SortOrder
    targetUserId?: SortOrder
    planId?: SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    reviewer?: UserOrderByWithRelationInput
    targetUser?: UserOrderByWithRelationInput
    plan?: TravelPlanOrderByWithRelationInput
  }

  export type ReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    reviewerId_targetUserId_planId?: ReviewReviewerIdTargetUserIdPlanIdCompoundUniqueInput
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    reviewerId?: StringFilter<"Review"> | string
    targetUserId?: StringFilter<"Review"> | string
    planId?: StringFilter<"Review"> | string
    rating?: IntFilter<"Review"> | number
    comment?: StringNullableFilter<"Review"> | string | null
    createdAt?: DateTimeFilter<"Review"> | Date | string
    reviewer?: XOR<UserScalarRelationFilter, UserWhereInput>
    targetUser?: XOR<UserScalarRelationFilter, UserWhereInput>
    plan?: XOR<TravelPlanScalarRelationFilter, TravelPlanWhereInput>
  }, "id" | "reviewerId_targetUserId_planId">

  export type ReviewOrderByWithAggregationInput = {
    id?: SortOrder
    reviewerId?: SortOrder
    targetUserId?: SortOrder
    planId?: SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ReviewCountOrderByAggregateInput
    _avg?: ReviewAvgOrderByAggregateInput
    _max?: ReviewMaxOrderByAggregateInput
    _min?: ReviewMinOrderByAggregateInput
    _sum?: ReviewSumOrderByAggregateInput
  }

  export type ReviewScalarWhereWithAggregatesInput = {
    AND?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    OR?: ReviewScalarWhereWithAggregatesInput[]
    NOT?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Review"> | string
    reviewerId?: StringWithAggregatesFilter<"Review"> | string
    targetUserId?: StringWithAggregatesFilter<"Review"> | string
    planId?: StringWithAggregatesFilter<"Review"> | string
    rating?: IntWithAggregatesFilter<"Review"> | number
    comment?: StringNullableWithAggregatesFilter<"Review"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Review"> | Date | string
  }

  export type PaymentWhereInput = {
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    id?: StringFilter<"Payment"> | string
    userId?: StringFilter<"Payment"> | string
    subscriptionId?: IntNullableFilter<"Payment"> | number | null
    amount?: FloatFilter<"Payment"> | number
    currency?: StringFilter<"Payment"> | string
    stripeInvoiceId?: StringFilter<"Payment"> | string
    stripePaymentIntent?: StringNullableFilter<"Payment"> | string | null
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    subscription?: XOR<SubscriptionNullableScalarRelationFilter, SubscriptionWhereInput> | null
  }

  export type PaymentOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    subscriptionId?: SortOrderInput | SortOrder
    amount?: SortOrder
    currency?: SortOrder
    stripeInvoiceId?: SortOrder
    stripePaymentIntent?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    subscription?: SubscriptionOrderByWithRelationInput
  }

  export type PaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    stripeInvoiceId?: string
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    userId?: StringFilter<"Payment"> | string
    subscriptionId?: IntNullableFilter<"Payment"> | number | null
    amount?: FloatFilter<"Payment"> | number
    currency?: StringFilter<"Payment"> | string
    stripePaymentIntent?: StringNullableFilter<"Payment"> | string | null
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    subscription?: XOR<SubscriptionNullableScalarRelationFilter, SubscriptionWhereInput> | null
  }, "id" | "stripeInvoiceId">

  export type PaymentOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    subscriptionId?: SortOrderInput | SortOrder
    amount?: SortOrder
    currency?: SortOrder
    stripeInvoiceId?: SortOrder
    stripePaymentIntent?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: PaymentCountOrderByAggregateInput
    _avg?: PaymentAvgOrderByAggregateInput
    _max?: PaymentMaxOrderByAggregateInput
    _min?: PaymentMinOrderByAggregateInput
    _sum?: PaymentSumOrderByAggregateInput
  }

  export type PaymentScalarWhereWithAggregatesInput = {
    AND?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    OR?: PaymentScalarWhereWithAggregatesInput[]
    NOT?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Payment"> | string
    userId?: StringWithAggregatesFilter<"Payment"> | string
    subscriptionId?: IntNullableWithAggregatesFilter<"Payment"> | number | null
    amount?: FloatWithAggregatesFilter<"Payment"> | number
    currency?: StringWithAggregatesFilter<"Payment"> | string
    stripeInvoiceId?: StringWithAggregatesFilter<"Payment"> | string
    stripePaymentIntent?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    status?: EnumPaymentStatusWithAggregatesFilter<"Payment"> | $Enums.PaymentStatus
    createdAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
  }

  export type SubscriptionWhereInput = {
    AND?: SubscriptionWhereInput | SubscriptionWhereInput[]
    OR?: SubscriptionWhereInput[]
    NOT?: SubscriptionWhereInput | SubscriptionWhereInput[]
    id?: IntFilter<"Subscription"> | number
    userId?: StringFilter<"Subscription"> | string
    stripeCustomerId?: StringFilter<"Subscription"> | string
    stripeSubscriptionId?: StringFilter<"Subscription"> | string
    status?: EnumSubscriptionStatusFilter<"Subscription"> | $Enums.SubscriptionStatus
    plan?: EnumPlanTypeFilter<"Subscription"> | $Enums.PlanType
    currentPeriodEnd?: DateTimeFilter<"Subscription"> | Date | string
    createdAt?: DateTimeFilter<"Subscription"> | Date | string
    updatedAt?: DateTimeFilter<"Subscription"> | Date | string
    payments?: PaymentListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SubscriptionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    stripeCustomerId?: SortOrder
    stripeSubscriptionId?: SortOrder
    status?: SortOrder
    plan?: SortOrder
    currentPeriodEnd?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    payments?: PaymentOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
  }

  export type SubscriptionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: string
    stripeCustomerId?: string
    stripeSubscriptionId?: string
    AND?: SubscriptionWhereInput | SubscriptionWhereInput[]
    OR?: SubscriptionWhereInput[]
    NOT?: SubscriptionWhereInput | SubscriptionWhereInput[]
    status?: EnumSubscriptionStatusFilter<"Subscription"> | $Enums.SubscriptionStatus
    plan?: EnumPlanTypeFilter<"Subscription"> | $Enums.PlanType
    currentPeriodEnd?: DateTimeFilter<"Subscription"> | Date | string
    createdAt?: DateTimeFilter<"Subscription"> | Date | string
    updatedAt?: DateTimeFilter<"Subscription"> | Date | string
    payments?: PaymentListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId" | "stripeCustomerId" | "stripeSubscriptionId">

  export type SubscriptionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    stripeCustomerId?: SortOrder
    stripeSubscriptionId?: SortOrder
    status?: SortOrder
    plan?: SortOrder
    currentPeriodEnd?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SubscriptionCountOrderByAggregateInput
    _avg?: SubscriptionAvgOrderByAggregateInput
    _max?: SubscriptionMaxOrderByAggregateInput
    _min?: SubscriptionMinOrderByAggregateInput
    _sum?: SubscriptionSumOrderByAggregateInput
  }

  export type SubscriptionScalarWhereWithAggregatesInput = {
    AND?: SubscriptionScalarWhereWithAggregatesInput | SubscriptionScalarWhereWithAggregatesInput[]
    OR?: SubscriptionScalarWhereWithAggregatesInput[]
    NOT?: SubscriptionScalarWhereWithAggregatesInput | SubscriptionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Subscription"> | number
    userId?: StringWithAggregatesFilter<"Subscription"> | string
    stripeCustomerId?: StringWithAggregatesFilter<"Subscription"> | string
    stripeSubscriptionId?: StringWithAggregatesFilter<"Subscription"> | string
    status?: EnumSubscriptionStatusWithAggregatesFilter<"Subscription"> | $Enums.SubscriptionStatus
    plan?: EnumPlanTypeWithAggregatesFilter<"Subscription"> | $Enums.PlanType
    currentPeriodEnd?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.UserRole
    bio?: string | null
    profileImage?: string | null
    currentLocation?: string | null
    gender: $Enums.Gender
    interests?: UserCreateinterestsInput | string[]
    visitedCountries?: UserCreatevisitedCountriesInput | string[]
    verifiedBadge?: boolean
    status?: $Enums.UserStatus
    createdTravelPlans?: UserCreatecreatedTravelPlansInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    travelPlans?: TravelPlanCreateNestedManyWithoutUserInput
    joinRequests?: TravelPlanJoinRequestCreateNestedManyWithoutRequesterInput
    participants?: TravelPlanParticipantCreateNestedManyWithoutUserInput
    givenReviews?: ReviewCreateNestedManyWithoutReviewerInput
    receivedReviews?: ReviewCreateNestedManyWithoutTargetUserInput
    payments?: PaymentCreateNestedManyWithoutUserInput
    subscription?: SubscriptionCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.UserRole
    bio?: string | null
    profileImage?: string | null
    currentLocation?: string | null
    gender: $Enums.Gender
    interests?: UserCreateinterestsInput | string[]
    visitedCountries?: UserCreatevisitedCountriesInput | string[]
    verifiedBadge?: boolean
    status?: $Enums.UserStatus
    createdTravelPlans?: UserCreatecreatedTravelPlansInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    travelPlans?: TravelPlanUncheckedCreateNestedManyWithoutUserInput
    joinRequests?: TravelPlanJoinRequestUncheckedCreateNestedManyWithoutRequesterInput
    participants?: TravelPlanParticipantUncheckedCreateNestedManyWithoutUserInput
    givenReviews?: ReviewUncheckedCreateNestedManyWithoutReviewerInput
    receivedReviews?: ReviewUncheckedCreateNestedManyWithoutTargetUserInput
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
    subscription?: SubscriptionUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    currentLocation?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    interests?: UserUpdateinterestsInput | string[]
    visitedCountries?: UserUpdatevisitedCountriesInput | string[]
    verifiedBadge?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdTravelPlans?: UserUpdatecreatedTravelPlansInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    travelPlans?: TravelPlanUpdateManyWithoutUserNestedInput
    joinRequests?: TravelPlanJoinRequestUpdateManyWithoutRequesterNestedInput
    participants?: TravelPlanParticipantUpdateManyWithoutUserNestedInput
    givenReviews?: ReviewUpdateManyWithoutReviewerNestedInput
    receivedReviews?: ReviewUpdateManyWithoutTargetUserNestedInput
    payments?: PaymentUpdateManyWithoutUserNestedInput
    subscription?: SubscriptionUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    currentLocation?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    interests?: UserUpdateinterestsInput | string[]
    visitedCountries?: UserUpdatevisitedCountriesInput | string[]
    verifiedBadge?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdTravelPlans?: UserUpdatecreatedTravelPlansInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    travelPlans?: TravelPlanUncheckedUpdateManyWithoutUserNestedInput
    joinRequests?: TravelPlanJoinRequestUncheckedUpdateManyWithoutRequesterNestedInput
    participants?: TravelPlanParticipantUncheckedUpdateManyWithoutUserNestedInput
    givenReviews?: ReviewUncheckedUpdateManyWithoutReviewerNestedInput
    receivedReviews?: ReviewUncheckedUpdateManyWithoutTargetUserNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
    subscription?: SubscriptionUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.UserRole
    bio?: string | null
    profileImage?: string | null
    currentLocation?: string | null
    gender: $Enums.Gender
    interests?: UserCreateinterestsInput | string[]
    visitedCountries?: UserCreatevisitedCountriesInput | string[]
    verifiedBadge?: boolean
    status?: $Enums.UserStatus
    createdTravelPlans?: UserCreatecreatedTravelPlansInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    currentLocation?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    interests?: UserUpdateinterestsInput | string[]
    visitedCountries?: UserUpdatevisitedCountriesInput | string[]
    verifiedBadge?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdTravelPlans?: UserUpdatecreatedTravelPlansInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    currentLocation?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    interests?: UserUpdateinterestsInput | string[]
    visitedCountries?: UserUpdatevisitedCountriesInput | string[]
    verifiedBadge?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdTravelPlans?: UserUpdatecreatedTravelPlansInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TravelPlanCreateInput = {
    id?: string
    destination: string
    startDate: Date | string
    endDate: Date | string
    budgetRange?: string | null
    travelType: $Enums.TravelType
    description?: string | null
    visibility?: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTravelPlansInput
    participants?: TravelPlanParticipantCreateNestedManyWithoutPlanInput
    joinRequests?: TravelPlanJoinRequestCreateNestedManyWithoutPlanInput
    reviews?: ReviewCreateNestedManyWithoutPlanInput
  }

  export type TravelPlanUncheckedCreateInput = {
    id?: string
    userId: string
    destination: string
    startDate: Date | string
    endDate: Date | string
    budgetRange?: string | null
    travelType: $Enums.TravelType
    description?: string | null
    visibility?: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    participants?: TravelPlanParticipantUncheckedCreateNestedManyWithoutPlanInput
    joinRequests?: TravelPlanJoinRequestUncheckedCreateNestedManyWithoutPlanInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutPlanInput
  }

  export type TravelPlanUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    budgetRange?: NullableStringFieldUpdateOperationsInput | string | null
    travelType?: EnumTravelTypeFieldUpdateOperationsInput | $Enums.TravelType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    visibility?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTravelPlansNestedInput
    participants?: TravelPlanParticipantUpdateManyWithoutPlanNestedInput
    joinRequests?: TravelPlanJoinRequestUpdateManyWithoutPlanNestedInput
    reviews?: ReviewUpdateManyWithoutPlanNestedInput
  }

  export type TravelPlanUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    budgetRange?: NullableStringFieldUpdateOperationsInput | string | null
    travelType?: EnumTravelTypeFieldUpdateOperationsInput | $Enums.TravelType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    visibility?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participants?: TravelPlanParticipantUncheckedUpdateManyWithoutPlanNestedInput
    joinRequests?: TravelPlanJoinRequestUncheckedUpdateManyWithoutPlanNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutPlanNestedInput
  }

  export type TravelPlanCreateManyInput = {
    id?: string
    userId: string
    destination: string
    startDate: Date | string
    endDate: Date | string
    budgetRange?: string | null
    travelType: $Enums.TravelType
    description?: string | null
    visibility?: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TravelPlanUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    budgetRange?: NullableStringFieldUpdateOperationsInput | string | null
    travelType?: EnumTravelTypeFieldUpdateOperationsInput | $Enums.TravelType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    visibility?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TravelPlanUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    budgetRange?: NullableStringFieldUpdateOperationsInput | string | null
    travelType?: EnumTravelTypeFieldUpdateOperationsInput | $Enums.TravelType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    visibility?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TravelPlanParticipantCreateInput = {
    id?: string
    joinedAt?: Date | string
    status?: $Enums.ParticipantStatus
    plan: TravelPlanCreateNestedOneWithoutParticipantsInput
    user: UserCreateNestedOneWithoutParticipantsInput
  }

  export type TravelPlanParticipantUncheckedCreateInput = {
    id?: string
    planId: string
    userId: string
    joinedAt?: Date | string
    status?: $Enums.ParticipantStatus
  }

  export type TravelPlanParticipantUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumParticipantStatusFieldUpdateOperationsInput | $Enums.ParticipantStatus
    plan?: TravelPlanUpdateOneRequiredWithoutParticipantsNestedInput
    user?: UserUpdateOneRequiredWithoutParticipantsNestedInput
  }

  export type TravelPlanParticipantUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumParticipantStatusFieldUpdateOperationsInput | $Enums.ParticipantStatus
  }

  export type TravelPlanParticipantCreateManyInput = {
    id?: string
    planId: string
    userId: string
    joinedAt?: Date | string
    status?: $Enums.ParticipantStatus
  }

  export type TravelPlanParticipantUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumParticipantStatusFieldUpdateOperationsInput | $Enums.ParticipantStatus
  }

  export type TravelPlanParticipantUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumParticipantStatusFieldUpdateOperationsInput | $Enums.ParticipantStatus
  }

  export type TravelPlanJoinRequestCreateInput = {
    id?: string
    status?: $Enums.JoinStatus
    plan: TravelPlanCreateNestedOneWithoutJoinRequestsInput
    requester: UserCreateNestedOneWithoutJoinRequestsInput
  }

  export type TravelPlanJoinRequestUncheckedCreateInput = {
    id?: string
    planId: string
    requesterId: string
    status?: $Enums.JoinStatus
  }

  export type TravelPlanJoinRequestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumJoinStatusFieldUpdateOperationsInput | $Enums.JoinStatus
    plan?: TravelPlanUpdateOneRequiredWithoutJoinRequestsNestedInput
    requester?: UserUpdateOneRequiredWithoutJoinRequestsNestedInput
  }

  export type TravelPlanJoinRequestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    requesterId?: StringFieldUpdateOperationsInput | string
    status?: EnumJoinStatusFieldUpdateOperationsInput | $Enums.JoinStatus
  }

  export type TravelPlanJoinRequestCreateManyInput = {
    id?: string
    planId: string
    requesterId: string
    status?: $Enums.JoinStatus
  }

  export type TravelPlanJoinRequestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumJoinStatusFieldUpdateOperationsInput | $Enums.JoinStatus
  }

  export type TravelPlanJoinRequestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    requesterId?: StringFieldUpdateOperationsInput | string
    status?: EnumJoinStatusFieldUpdateOperationsInput | $Enums.JoinStatus
  }

  export type ReviewCreateInput = {
    id?: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    reviewer: UserCreateNestedOneWithoutGivenReviewsInput
    targetUser: UserCreateNestedOneWithoutReceivedReviewsInput
    plan: TravelPlanCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateInput = {
    id?: string
    reviewerId: string
    targetUserId: string
    planId: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type ReviewUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewer?: UserUpdateOneRequiredWithoutGivenReviewsNestedInput
    targetUser?: UserUpdateOneRequiredWithoutReceivedReviewsNestedInput
    plan?: TravelPlanUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reviewerId?: StringFieldUpdateOperationsInput | string
    targetUserId?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCreateManyInput = {
    id?: string
    reviewerId: string
    targetUserId: string
    planId: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type ReviewUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    reviewerId?: StringFieldUpdateOperationsInput | string
    targetUserId?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateInput = {
    id?: string
    amount: number
    currency?: string
    stripeInvoiceId: string
    stripePaymentIntent?: string | null
    status?: $Enums.PaymentStatus
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutPaymentsInput
    subscription?: SubscriptionCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentUncheckedCreateInput = {
    id?: string
    userId: string
    subscriptionId?: number | null
    amount: number
    currency?: string
    stripeInvoiceId: string
    stripePaymentIntent?: string | null
    status?: $Enums.PaymentStatus
    createdAt?: Date | string
  }

  export type PaymentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    stripeInvoiceId?: StringFieldUpdateOperationsInput | string
    stripePaymentIntent?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPaymentsNestedInput
    subscription?: SubscriptionUpdateOneWithoutPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    subscriptionId?: NullableIntFieldUpdateOperationsInput | number | null
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    stripeInvoiceId?: StringFieldUpdateOperationsInput | string
    stripePaymentIntent?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateManyInput = {
    id?: string
    userId: string
    subscriptionId?: number | null
    amount: number
    currency?: string
    stripeInvoiceId: string
    stripePaymentIntent?: string | null
    status?: $Enums.PaymentStatus
    createdAt?: Date | string
  }

  export type PaymentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    stripeInvoiceId?: StringFieldUpdateOperationsInput | string
    stripePaymentIntent?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    subscriptionId?: NullableIntFieldUpdateOperationsInput | number | null
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    stripeInvoiceId?: StringFieldUpdateOperationsInput | string
    stripePaymentIntent?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionCreateInput = {
    stripeCustomerId: string
    stripeSubscriptionId: string
    status: $Enums.SubscriptionStatus
    plan: $Enums.PlanType
    currentPeriodEnd: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: PaymentCreateNestedManyWithoutSubscriptionInput
    user: UserCreateNestedOneWithoutSubscriptionInput
  }

  export type SubscriptionUncheckedCreateInput = {
    id?: number
    userId: string
    stripeCustomerId: string
    stripeSubscriptionId: string
    status: $Enums.SubscriptionStatus
    plan: $Enums.PlanType
    currentPeriodEnd: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: PaymentUncheckedCreateNestedManyWithoutSubscriptionInput
  }

  export type SubscriptionUpdateInput = {
    stripeCustomerId?: StringFieldUpdateOperationsInput | string
    stripeSubscriptionId?: StringFieldUpdateOperationsInput | string
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    plan?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    currentPeriodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUpdateManyWithoutSubscriptionNestedInput
    user?: UserUpdateOneRequiredWithoutSubscriptionNestedInput
  }

  export type SubscriptionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    stripeCustomerId?: StringFieldUpdateOperationsInput | string
    stripeSubscriptionId?: StringFieldUpdateOperationsInput | string
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    plan?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    currentPeriodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUncheckedUpdateManyWithoutSubscriptionNestedInput
  }

  export type SubscriptionCreateManyInput = {
    id?: number
    userId: string
    stripeCustomerId: string
    stripeSubscriptionId: string
    status: $Enums.SubscriptionStatus
    plan: $Enums.PlanType
    currentPeriodEnd: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionUpdateManyMutationInput = {
    stripeCustomerId?: StringFieldUpdateOperationsInput | string
    stripeSubscriptionId?: StringFieldUpdateOperationsInput | string
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    plan?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    currentPeriodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    stripeCustomerId?: StringFieldUpdateOperationsInput | string
    stripeSubscriptionId?: StringFieldUpdateOperationsInput | string
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    plan?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    currentPeriodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type TravelPlanListRelationFilter = {
    every?: TravelPlanWhereInput
    some?: TravelPlanWhereInput
    none?: TravelPlanWhereInput
  }

  export type TravelPlanJoinRequestListRelationFilter = {
    every?: TravelPlanJoinRequestWhereInput
    some?: TravelPlanJoinRequestWhereInput
    none?: TravelPlanJoinRequestWhereInput
  }

  export type TravelPlanParticipantListRelationFilter = {
    every?: TravelPlanParticipantWhereInput
    some?: TravelPlanParticipantWhereInput
    none?: TravelPlanParticipantWhereInput
  }

  export type ReviewListRelationFilter = {
    every?: ReviewWhereInput
    some?: ReviewWhereInput
    none?: ReviewWhereInput
  }

  export type PaymentListRelationFilter = {
    every?: PaymentWhereInput
    some?: PaymentWhereInput
    none?: PaymentWhereInput
  }

  export type SubscriptionNullableScalarRelationFilter = {
    is?: SubscriptionWhereInput | null
    isNot?: SubscriptionWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TravelPlanOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TravelPlanJoinRequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TravelPlanParticipantOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PaymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    bio?: SortOrder
    profileImage?: SortOrder
    currentLocation?: SortOrder
    gender?: SortOrder
    interests?: SortOrder
    visitedCountries?: SortOrder
    verifiedBadge?: SortOrder
    status?: SortOrder
    createdTravelPlans?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    bio?: SortOrder
    profileImage?: SortOrder
    currentLocation?: SortOrder
    gender?: SortOrder
    verifiedBadge?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    bio?: SortOrder
    profileImage?: SortOrder
    currentLocation?: SortOrder
    gender?: SortOrder
    verifiedBadge?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserStatusFilter<$PrismaModel>
    _max?: NestedEnumUserStatusFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumTravelTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TravelType | EnumTravelTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TravelType[] | ListEnumTravelTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TravelType[] | ListEnumTravelTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTravelTypeFilter<$PrismaModel> | $Enums.TravelType
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type TravelPlanCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    destination?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    budgetRange?: SortOrder
    travelType?: SortOrder
    description?: SortOrder
    visibility?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TravelPlanMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    destination?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    budgetRange?: SortOrder
    travelType?: SortOrder
    description?: SortOrder
    visibility?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TravelPlanMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    destination?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    budgetRange?: SortOrder
    travelType?: SortOrder
    description?: SortOrder
    visibility?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumTravelTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TravelType | EnumTravelTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TravelType[] | ListEnumTravelTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TravelType[] | ListEnumTravelTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTravelTypeWithAggregatesFilter<$PrismaModel> | $Enums.TravelType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTravelTypeFilter<$PrismaModel>
    _max?: NestedEnumTravelTypeFilter<$PrismaModel>
  }

  export type EnumParticipantStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ParticipantStatus | EnumParticipantStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ParticipantStatus[] | ListEnumParticipantStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ParticipantStatus[] | ListEnumParticipantStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumParticipantStatusFilter<$PrismaModel> | $Enums.ParticipantStatus
  }

  export type TravelPlanScalarRelationFilter = {
    is?: TravelPlanWhereInput
    isNot?: TravelPlanWhereInput
  }

  export type TravelPlanParticipantPlanIdUserIdCompoundUniqueInput = {
    planId: string
    userId: string
  }

  export type TravelPlanParticipantCountOrderByAggregateInput = {
    id?: SortOrder
    planId?: SortOrder
    userId?: SortOrder
    joinedAt?: SortOrder
    status?: SortOrder
  }

  export type TravelPlanParticipantMaxOrderByAggregateInput = {
    id?: SortOrder
    planId?: SortOrder
    userId?: SortOrder
    joinedAt?: SortOrder
    status?: SortOrder
  }

  export type TravelPlanParticipantMinOrderByAggregateInput = {
    id?: SortOrder
    planId?: SortOrder
    userId?: SortOrder
    joinedAt?: SortOrder
    status?: SortOrder
  }

  export type EnumParticipantStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ParticipantStatus | EnumParticipantStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ParticipantStatus[] | ListEnumParticipantStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ParticipantStatus[] | ListEnumParticipantStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumParticipantStatusWithAggregatesFilter<$PrismaModel> | $Enums.ParticipantStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumParticipantStatusFilter<$PrismaModel>
    _max?: NestedEnumParticipantStatusFilter<$PrismaModel>
  }

  export type EnumJoinStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.JoinStatus | EnumJoinStatusFieldRefInput<$PrismaModel>
    in?: $Enums.JoinStatus[] | ListEnumJoinStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.JoinStatus[] | ListEnumJoinStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumJoinStatusFilter<$PrismaModel> | $Enums.JoinStatus
  }

  export type TravelPlanJoinRequestCountOrderByAggregateInput = {
    id?: SortOrder
    planId?: SortOrder
    requesterId?: SortOrder
    status?: SortOrder
  }

  export type TravelPlanJoinRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    planId?: SortOrder
    requesterId?: SortOrder
    status?: SortOrder
  }

  export type TravelPlanJoinRequestMinOrderByAggregateInput = {
    id?: SortOrder
    planId?: SortOrder
    requesterId?: SortOrder
    status?: SortOrder
  }

  export type EnumJoinStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JoinStatus | EnumJoinStatusFieldRefInput<$PrismaModel>
    in?: $Enums.JoinStatus[] | ListEnumJoinStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.JoinStatus[] | ListEnumJoinStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumJoinStatusWithAggregatesFilter<$PrismaModel> | $Enums.JoinStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumJoinStatusFilter<$PrismaModel>
    _max?: NestedEnumJoinStatusFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type ReviewReviewerIdTargetUserIdPlanIdCompoundUniqueInput = {
    reviewerId: string
    targetUserId: string
    planId: string
  }

  export type ReviewCountOrderByAggregateInput = {
    id?: SortOrder
    reviewerId?: SortOrder
    targetUserId?: SortOrder
    planId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
  }

  export type ReviewAvgOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type ReviewMaxOrderByAggregateInput = {
    id?: SortOrder
    reviewerId?: SortOrder
    targetUserId?: SortOrder
    planId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
  }

  export type ReviewMinOrderByAggregateInput = {
    id?: SortOrder
    reviewerId?: SortOrder
    targetUserId?: SortOrder
    planId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
  }

  export type ReviewSumOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type EnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type PaymentCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    subscriptionId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    stripeInvoiceId?: SortOrder
    stripePaymentIntent?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type PaymentAvgOrderByAggregateInput = {
    subscriptionId?: SortOrder
    amount?: SortOrder
  }

  export type PaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    subscriptionId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    stripeInvoiceId?: SortOrder
    stripePaymentIntent?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type PaymentMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    subscriptionId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    stripeInvoiceId?: SortOrder
    stripePaymentIntent?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type PaymentSumOrderByAggregateInput = {
    subscriptionId?: SortOrder
    amount?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type EnumSubscriptionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionStatus | EnumSubscriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionStatusFilter<$PrismaModel> | $Enums.SubscriptionStatus
  }

  export type EnumPlanTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PlanType | EnumPlanTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PlanType[] | ListEnumPlanTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlanType[] | ListEnumPlanTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPlanTypeFilter<$PrismaModel> | $Enums.PlanType
  }

  export type SubscriptionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    stripeCustomerId?: SortOrder
    stripeSubscriptionId?: SortOrder
    status?: SortOrder
    plan?: SortOrder
    currentPeriodEnd?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubscriptionAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SubscriptionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    stripeCustomerId?: SortOrder
    stripeSubscriptionId?: SortOrder
    status?: SortOrder
    plan?: SortOrder
    currentPeriodEnd?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubscriptionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    stripeCustomerId?: SortOrder
    stripeSubscriptionId?: SortOrder
    status?: SortOrder
    plan?: SortOrder
    currentPeriodEnd?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubscriptionSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumSubscriptionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionStatus | EnumSubscriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionStatusWithAggregatesFilter<$PrismaModel> | $Enums.SubscriptionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubscriptionStatusFilter<$PrismaModel>
    _max?: NestedEnumSubscriptionStatusFilter<$PrismaModel>
  }

  export type EnumPlanTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PlanType | EnumPlanTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PlanType[] | ListEnumPlanTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlanType[] | ListEnumPlanTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPlanTypeWithAggregatesFilter<$PrismaModel> | $Enums.PlanType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPlanTypeFilter<$PrismaModel>
    _max?: NestedEnumPlanTypeFilter<$PrismaModel>
  }

  export type UserCreateinterestsInput = {
    set: string[]
  }

  export type UserCreatevisitedCountriesInput = {
    set: string[]
  }

  export type UserCreatecreatedTravelPlansInput = {
    set: string[]
  }

  export type TravelPlanCreateNestedManyWithoutUserInput = {
    create?: XOR<TravelPlanCreateWithoutUserInput, TravelPlanUncheckedCreateWithoutUserInput> | TravelPlanCreateWithoutUserInput[] | TravelPlanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TravelPlanCreateOrConnectWithoutUserInput | TravelPlanCreateOrConnectWithoutUserInput[]
    createMany?: TravelPlanCreateManyUserInputEnvelope
    connect?: TravelPlanWhereUniqueInput | TravelPlanWhereUniqueInput[]
  }

  export type TravelPlanJoinRequestCreateNestedManyWithoutRequesterInput = {
    create?: XOR<TravelPlanJoinRequestCreateWithoutRequesterInput, TravelPlanJoinRequestUncheckedCreateWithoutRequesterInput> | TravelPlanJoinRequestCreateWithoutRequesterInput[] | TravelPlanJoinRequestUncheckedCreateWithoutRequesterInput[]
    connectOrCreate?: TravelPlanJoinRequestCreateOrConnectWithoutRequesterInput | TravelPlanJoinRequestCreateOrConnectWithoutRequesterInput[]
    createMany?: TravelPlanJoinRequestCreateManyRequesterInputEnvelope
    connect?: TravelPlanJoinRequestWhereUniqueInput | TravelPlanJoinRequestWhereUniqueInput[]
  }

  export type TravelPlanParticipantCreateNestedManyWithoutUserInput = {
    create?: XOR<TravelPlanParticipantCreateWithoutUserInput, TravelPlanParticipantUncheckedCreateWithoutUserInput> | TravelPlanParticipantCreateWithoutUserInput[] | TravelPlanParticipantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TravelPlanParticipantCreateOrConnectWithoutUserInput | TravelPlanParticipantCreateOrConnectWithoutUserInput[]
    createMany?: TravelPlanParticipantCreateManyUserInputEnvelope
    connect?: TravelPlanParticipantWhereUniqueInput | TravelPlanParticipantWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutReviewerInput = {
    create?: XOR<ReviewCreateWithoutReviewerInput, ReviewUncheckedCreateWithoutReviewerInput> | ReviewCreateWithoutReviewerInput[] | ReviewUncheckedCreateWithoutReviewerInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutReviewerInput | ReviewCreateOrConnectWithoutReviewerInput[]
    createMany?: ReviewCreateManyReviewerInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutTargetUserInput = {
    create?: XOR<ReviewCreateWithoutTargetUserInput, ReviewUncheckedCreateWithoutTargetUserInput> | ReviewCreateWithoutTargetUserInput[] | ReviewUncheckedCreateWithoutTargetUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutTargetUserInput | ReviewCreateOrConnectWithoutTargetUserInput[]
    createMany?: ReviewCreateManyTargetUserInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type PaymentCreateNestedManyWithoutUserInput = {
    create?: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput> | PaymentCreateWithoutUserInput[] | PaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutUserInput | PaymentCreateOrConnectWithoutUserInput[]
    createMany?: PaymentCreateManyUserInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type SubscriptionCreateNestedOneWithoutUserInput = {
    create?: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserInput
    connect?: SubscriptionWhereUniqueInput
  }

  export type TravelPlanUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TravelPlanCreateWithoutUserInput, TravelPlanUncheckedCreateWithoutUserInput> | TravelPlanCreateWithoutUserInput[] | TravelPlanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TravelPlanCreateOrConnectWithoutUserInput | TravelPlanCreateOrConnectWithoutUserInput[]
    createMany?: TravelPlanCreateManyUserInputEnvelope
    connect?: TravelPlanWhereUniqueInput | TravelPlanWhereUniqueInput[]
  }

  export type TravelPlanJoinRequestUncheckedCreateNestedManyWithoutRequesterInput = {
    create?: XOR<TravelPlanJoinRequestCreateWithoutRequesterInput, TravelPlanJoinRequestUncheckedCreateWithoutRequesterInput> | TravelPlanJoinRequestCreateWithoutRequesterInput[] | TravelPlanJoinRequestUncheckedCreateWithoutRequesterInput[]
    connectOrCreate?: TravelPlanJoinRequestCreateOrConnectWithoutRequesterInput | TravelPlanJoinRequestCreateOrConnectWithoutRequesterInput[]
    createMany?: TravelPlanJoinRequestCreateManyRequesterInputEnvelope
    connect?: TravelPlanJoinRequestWhereUniqueInput | TravelPlanJoinRequestWhereUniqueInput[]
  }

  export type TravelPlanParticipantUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TravelPlanParticipantCreateWithoutUserInput, TravelPlanParticipantUncheckedCreateWithoutUserInput> | TravelPlanParticipantCreateWithoutUserInput[] | TravelPlanParticipantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TravelPlanParticipantCreateOrConnectWithoutUserInput | TravelPlanParticipantCreateOrConnectWithoutUserInput[]
    createMany?: TravelPlanParticipantCreateManyUserInputEnvelope
    connect?: TravelPlanParticipantWhereUniqueInput | TravelPlanParticipantWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutReviewerInput = {
    create?: XOR<ReviewCreateWithoutReviewerInput, ReviewUncheckedCreateWithoutReviewerInput> | ReviewCreateWithoutReviewerInput[] | ReviewUncheckedCreateWithoutReviewerInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutReviewerInput | ReviewCreateOrConnectWithoutReviewerInput[]
    createMany?: ReviewCreateManyReviewerInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutTargetUserInput = {
    create?: XOR<ReviewCreateWithoutTargetUserInput, ReviewUncheckedCreateWithoutTargetUserInput> | ReviewCreateWithoutTargetUserInput[] | ReviewUncheckedCreateWithoutTargetUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutTargetUserInput | ReviewCreateOrConnectWithoutTargetUserInput[]
    createMany?: ReviewCreateManyTargetUserInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput> | PaymentCreateWithoutUserInput[] | PaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutUserInput | PaymentCreateOrConnectWithoutUserInput[]
    createMany?: PaymentCreateManyUserInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type SubscriptionUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserInput
    connect?: SubscriptionWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumGenderFieldUpdateOperationsInput = {
    set?: $Enums.Gender
  }

  export type UserUpdateinterestsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdatevisitedCountriesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EnumUserStatusFieldUpdateOperationsInput = {
    set?: $Enums.UserStatus
  }

  export type UserUpdatecreatedTravelPlansInput = {
    set?: string[]
    push?: string | string[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TravelPlanUpdateManyWithoutUserNestedInput = {
    create?: XOR<TravelPlanCreateWithoutUserInput, TravelPlanUncheckedCreateWithoutUserInput> | TravelPlanCreateWithoutUserInput[] | TravelPlanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TravelPlanCreateOrConnectWithoutUserInput | TravelPlanCreateOrConnectWithoutUserInput[]
    upsert?: TravelPlanUpsertWithWhereUniqueWithoutUserInput | TravelPlanUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TravelPlanCreateManyUserInputEnvelope
    set?: TravelPlanWhereUniqueInput | TravelPlanWhereUniqueInput[]
    disconnect?: TravelPlanWhereUniqueInput | TravelPlanWhereUniqueInput[]
    delete?: TravelPlanWhereUniqueInput | TravelPlanWhereUniqueInput[]
    connect?: TravelPlanWhereUniqueInput | TravelPlanWhereUniqueInput[]
    update?: TravelPlanUpdateWithWhereUniqueWithoutUserInput | TravelPlanUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TravelPlanUpdateManyWithWhereWithoutUserInput | TravelPlanUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TravelPlanScalarWhereInput | TravelPlanScalarWhereInput[]
  }

  export type TravelPlanJoinRequestUpdateManyWithoutRequesterNestedInput = {
    create?: XOR<TravelPlanJoinRequestCreateWithoutRequesterInput, TravelPlanJoinRequestUncheckedCreateWithoutRequesterInput> | TravelPlanJoinRequestCreateWithoutRequesterInput[] | TravelPlanJoinRequestUncheckedCreateWithoutRequesterInput[]
    connectOrCreate?: TravelPlanJoinRequestCreateOrConnectWithoutRequesterInput | TravelPlanJoinRequestCreateOrConnectWithoutRequesterInput[]
    upsert?: TravelPlanJoinRequestUpsertWithWhereUniqueWithoutRequesterInput | TravelPlanJoinRequestUpsertWithWhereUniqueWithoutRequesterInput[]
    createMany?: TravelPlanJoinRequestCreateManyRequesterInputEnvelope
    set?: TravelPlanJoinRequestWhereUniqueInput | TravelPlanJoinRequestWhereUniqueInput[]
    disconnect?: TravelPlanJoinRequestWhereUniqueInput | TravelPlanJoinRequestWhereUniqueInput[]
    delete?: TravelPlanJoinRequestWhereUniqueInput | TravelPlanJoinRequestWhereUniqueInput[]
    connect?: TravelPlanJoinRequestWhereUniqueInput | TravelPlanJoinRequestWhereUniqueInput[]
    update?: TravelPlanJoinRequestUpdateWithWhereUniqueWithoutRequesterInput | TravelPlanJoinRequestUpdateWithWhereUniqueWithoutRequesterInput[]
    updateMany?: TravelPlanJoinRequestUpdateManyWithWhereWithoutRequesterInput | TravelPlanJoinRequestUpdateManyWithWhereWithoutRequesterInput[]
    deleteMany?: TravelPlanJoinRequestScalarWhereInput | TravelPlanJoinRequestScalarWhereInput[]
  }

  export type TravelPlanParticipantUpdateManyWithoutUserNestedInput = {
    create?: XOR<TravelPlanParticipantCreateWithoutUserInput, TravelPlanParticipantUncheckedCreateWithoutUserInput> | TravelPlanParticipantCreateWithoutUserInput[] | TravelPlanParticipantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TravelPlanParticipantCreateOrConnectWithoutUserInput | TravelPlanParticipantCreateOrConnectWithoutUserInput[]
    upsert?: TravelPlanParticipantUpsertWithWhereUniqueWithoutUserInput | TravelPlanParticipantUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TravelPlanParticipantCreateManyUserInputEnvelope
    set?: TravelPlanParticipantWhereUniqueInput | TravelPlanParticipantWhereUniqueInput[]
    disconnect?: TravelPlanParticipantWhereUniqueInput | TravelPlanParticipantWhereUniqueInput[]
    delete?: TravelPlanParticipantWhereUniqueInput | TravelPlanParticipantWhereUniqueInput[]
    connect?: TravelPlanParticipantWhereUniqueInput | TravelPlanParticipantWhereUniqueInput[]
    update?: TravelPlanParticipantUpdateWithWhereUniqueWithoutUserInput | TravelPlanParticipantUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TravelPlanParticipantUpdateManyWithWhereWithoutUserInput | TravelPlanParticipantUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TravelPlanParticipantScalarWhereInput | TravelPlanParticipantScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutReviewerNestedInput = {
    create?: XOR<ReviewCreateWithoutReviewerInput, ReviewUncheckedCreateWithoutReviewerInput> | ReviewCreateWithoutReviewerInput[] | ReviewUncheckedCreateWithoutReviewerInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutReviewerInput | ReviewCreateOrConnectWithoutReviewerInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutReviewerInput | ReviewUpsertWithWhereUniqueWithoutReviewerInput[]
    createMany?: ReviewCreateManyReviewerInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutReviewerInput | ReviewUpdateWithWhereUniqueWithoutReviewerInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutReviewerInput | ReviewUpdateManyWithWhereWithoutReviewerInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutTargetUserNestedInput = {
    create?: XOR<ReviewCreateWithoutTargetUserInput, ReviewUncheckedCreateWithoutTargetUserInput> | ReviewCreateWithoutTargetUserInput[] | ReviewUncheckedCreateWithoutTargetUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutTargetUserInput | ReviewCreateOrConnectWithoutTargetUserInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutTargetUserInput | ReviewUpsertWithWhereUniqueWithoutTargetUserInput[]
    createMany?: ReviewCreateManyTargetUserInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutTargetUserInput | ReviewUpdateWithWhereUniqueWithoutTargetUserInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutTargetUserInput | ReviewUpdateManyWithWhereWithoutTargetUserInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type PaymentUpdateManyWithoutUserNestedInput = {
    create?: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput> | PaymentCreateWithoutUserInput[] | PaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutUserInput | PaymentCreateOrConnectWithoutUserInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutUserInput | PaymentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PaymentCreateManyUserInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutUserInput | PaymentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutUserInput | PaymentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type SubscriptionUpdateOneWithoutUserNestedInput = {
    create?: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserInput
    upsert?: SubscriptionUpsertWithoutUserInput
    disconnect?: SubscriptionWhereInput | boolean
    delete?: SubscriptionWhereInput | boolean
    connect?: SubscriptionWhereUniqueInput
    update?: XOR<XOR<SubscriptionUpdateToOneWithWhereWithoutUserInput, SubscriptionUpdateWithoutUserInput>, SubscriptionUncheckedUpdateWithoutUserInput>
  }

  export type TravelPlanUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TravelPlanCreateWithoutUserInput, TravelPlanUncheckedCreateWithoutUserInput> | TravelPlanCreateWithoutUserInput[] | TravelPlanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TravelPlanCreateOrConnectWithoutUserInput | TravelPlanCreateOrConnectWithoutUserInput[]
    upsert?: TravelPlanUpsertWithWhereUniqueWithoutUserInput | TravelPlanUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TravelPlanCreateManyUserInputEnvelope
    set?: TravelPlanWhereUniqueInput | TravelPlanWhereUniqueInput[]
    disconnect?: TravelPlanWhereUniqueInput | TravelPlanWhereUniqueInput[]
    delete?: TravelPlanWhereUniqueInput | TravelPlanWhereUniqueInput[]
    connect?: TravelPlanWhereUniqueInput | TravelPlanWhereUniqueInput[]
    update?: TravelPlanUpdateWithWhereUniqueWithoutUserInput | TravelPlanUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TravelPlanUpdateManyWithWhereWithoutUserInput | TravelPlanUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TravelPlanScalarWhereInput | TravelPlanScalarWhereInput[]
  }

  export type TravelPlanJoinRequestUncheckedUpdateManyWithoutRequesterNestedInput = {
    create?: XOR<TravelPlanJoinRequestCreateWithoutRequesterInput, TravelPlanJoinRequestUncheckedCreateWithoutRequesterInput> | TravelPlanJoinRequestCreateWithoutRequesterInput[] | TravelPlanJoinRequestUncheckedCreateWithoutRequesterInput[]
    connectOrCreate?: TravelPlanJoinRequestCreateOrConnectWithoutRequesterInput | TravelPlanJoinRequestCreateOrConnectWithoutRequesterInput[]
    upsert?: TravelPlanJoinRequestUpsertWithWhereUniqueWithoutRequesterInput | TravelPlanJoinRequestUpsertWithWhereUniqueWithoutRequesterInput[]
    createMany?: TravelPlanJoinRequestCreateManyRequesterInputEnvelope
    set?: TravelPlanJoinRequestWhereUniqueInput | TravelPlanJoinRequestWhereUniqueInput[]
    disconnect?: TravelPlanJoinRequestWhereUniqueInput | TravelPlanJoinRequestWhereUniqueInput[]
    delete?: TravelPlanJoinRequestWhereUniqueInput | TravelPlanJoinRequestWhereUniqueInput[]
    connect?: TravelPlanJoinRequestWhereUniqueInput | TravelPlanJoinRequestWhereUniqueInput[]
    update?: TravelPlanJoinRequestUpdateWithWhereUniqueWithoutRequesterInput | TravelPlanJoinRequestUpdateWithWhereUniqueWithoutRequesterInput[]
    updateMany?: TravelPlanJoinRequestUpdateManyWithWhereWithoutRequesterInput | TravelPlanJoinRequestUpdateManyWithWhereWithoutRequesterInput[]
    deleteMany?: TravelPlanJoinRequestScalarWhereInput | TravelPlanJoinRequestScalarWhereInput[]
  }

  export type TravelPlanParticipantUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TravelPlanParticipantCreateWithoutUserInput, TravelPlanParticipantUncheckedCreateWithoutUserInput> | TravelPlanParticipantCreateWithoutUserInput[] | TravelPlanParticipantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TravelPlanParticipantCreateOrConnectWithoutUserInput | TravelPlanParticipantCreateOrConnectWithoutUserInput[]
    upsert?: TravelPlanParticipantUpsertWithWhereUniqueWithoutUserInput | TravelPlanParticipantUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TravelPlanParticipantCreateManyUserInputEnvelope
    set?: TravelPlanParticipantWhereUniqueInput | TravelPlanParticipantWhereUniqueInput[]
    disconnect?: TravelPlanParticipantWhereUniqueInput | TravelPlanParticipantWhereUniqueInput[]
    delete?: TravelPlanParticipantWhereUniqueInput | TravelPlanParticipantWhereUniqueInput[]
    connect?: TravelPlanParticipantWhereUniqueInput | TravelPlanParticipantWhereUniqueInput[]
    update?: TravelPlanParticipantUpdateWithWhereUniqueWithoutUserInput | TravelPlanParticipantUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TravelPlanParticipantUpdateManyWithWhereWithoutUserInput | TravelPlanParticipantUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TravelPlanParticipantScalarWhereInput | TravelPlanParticipantScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutReviewerNestedInput = {
    create?: XOR<ReviewCreateWithoutReviewerInput, ReviewUncheckedCreateWithoutReviewerInput> | ReviewCreateWithoutReviewerInput[] | ReviewUncheckedCreateWithoutReviewerInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutReviewerInput | ReviewCreateOrConnectWithoutReviewerInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutReviewerInput | ReviewUpsertWithWhereUniqueWithoutReviewerInput[]
    createMany?: ReviewCreateManyReviewerInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutReviewerInput | ReviewUpdateWithWhereUniqueWithoutReviewerInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutReviewerInput | ReviewUpdateManyWithWhereWithoutReviewerInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutTargetUserNestedInput = {
    create?: XOR<ReviewCreateWithoutTargetUserInput, ReviewUncheckedCreateWithoutTargetUserInput> | ReviewCreateWithoutTargetUserInput[] | ReviewUncheckedCreateWithoutTargetUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutTargetUserInput | ReviewCreateOrConnectWithoutTargetUserInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutTargetUserInput | ReviewUpsertWithWhereUniqueWithoutTargetUserInput[]
    createMany?: ReviewCreateManyTargetUserInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutTargetUserInput | ReviewUpdateWithWhereUniqueWithoutTargetUserInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutTargetUserInput | ReviewUpdateManyWithWhereWithoutTargetUserInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput> | PaymentCreateWithoutUserInput[] | PaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutUserInput | PaymentCreateOrConnectWithoutUserInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutUserInput | PaymentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PaymentCreateManyUserInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutUserInput | PaymentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutUserInput | PaymentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type SubscriptionUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserInput
    upsert?: SubscriptionUpsertWithoutUserInput
    disconnect?: SubscriptionWhereInput | boolean
    delete?: SubscriptionWhereInput | boolean
    connect?: SubscriptionWhereUniqueInput
    update?: XOR<XOR<SubscriptionUpdateToOneWithWhereWithoutUserInput, SubscriptionUpdateWithoutUserInput>, SubscriptionUncheckedUpdateWithoutUserInput>
  }

  export type UserCreateNestedOneWithoutTravelPlansInput = {
    create?: XOR<UserCreateWithoutTravelPlansInput, UserUncheckedCreateWithoutTravelPlansInput>
    connectOrCreate?: UserCreateOrConnectWithoutTravelPlansInput
    connect?: UserWhereUniqueInput
  }

  export type TravelPlanParticipantCreateNestedManyWithoutPlanInput = {
    create?: XOR<TravelPlanParticipantCreateWithoutPlanInput, TravelPlanParticipantUncheckedCreateWithoutPlanInput> | TravelPlanParticipantCreateWithoutPlanInput[] | TravelPlanParticipantUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: TravelPlanParticipantCreateOrConnectWithoutPlanInput | TravelPlanParticipantCreateOrConnectWithoutPlanInput[]
    createMany?: TravelPlanParticipantCreateManyPlanInputEnvelope
    connect?: TravelPlanParticipantWhereUniqueInput | TravelPlanParticipantWhereUniqueInput[]
  }

  export type TravelPlanJoinRequestCreateNestedManyWithoutPlanInput = {
    create?: XOR<TravelPlanJoinRequestCreateWithoutPlanInput, TravelPlanJoinRequestUncheckedCreateWithoutPlanInput> | TravelPlanJoinRequestCreateWithoutPlanInput[] | TravelPlanJoinRequestUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: TravelPlanJoinRequestCreateOrConnectWithoutPlanInput | TravelPlanJoinRequestCreateOrConnectWithoutPlanInput[]
    createMany?: TravelPlanJoinRequestCreateManyPlanInputEnvelope
    connect?: TravelPlanJoinRequestWhereUniqueInput | TravelPlanJoinRequestWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutPlanInput = {
    create?: XOR<ReviewCreateWithoutPlanInput, ReviewUncheckedCreateWithoutPlanInput> | ReviewCreateWithoutPlanInput[] | ReviewUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutPlanInput | ReviewCreateOrConnectWithoutPlanInput[]
    createMany?: ReviewCreateManyPlanInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type TravelPlanParticipantUncheckedCreateNestedManyWithoutPlanInput = {
    create?: XOR<TravelPlanParticipantCreateWithoutPlanInput, TravelPlanParticipantUncheckedCreateWithoutPlanInput> | TravelPlanParticipantCreateWithoutPlanInput[] | TravelPlanParticipantUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: TravelPlanParticipantCreateOrConnectWithoutPlanInput | TravelPlanParticipantCreateOrConnectWithoutPlanInput[]
    createMany?: TravelPlanParticipantCreateManyPlanInputEnvelope
    connect?: TravelPlanParticipantWhereUniqueInput | TravelPlanParticipantWhereUniqueInput[]
  }

  export type TravelPlanJoinRequestUncheckedCreateNestedManyWithoutPlanInput = {
    create?: XOR<TravelPlanJoinRequestCreateWithoutPlanInput, TravelPlanJoinRequestUncheckedCreateWithoutPlanInput> | TravelPlanJoinRequestCreateWithoutPlanInput[] | TravelPlanJoinRequestUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: TravelPlanJoinRequestCreateOrConnectWithoutPlanInput | TravelPlanJoinRequestCreateOrConnectWithoutPlanInput[]
    createMany?: TravelPlanJoinRequestCreateManyPlanInputEnvelope
    connect?: TravelPlanJoinRequestWhereUniqueInput | TravelPlanJoinRequestWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutPlanInput = {
    create?: XOR<ReviewCreateWithoutPlanInput, ReviewUncheckedCreateWithoutPlanInput> | ReviewCreateWithoutPlanInput[] | ReviewUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutPlanInput | ReviewCreateOrConnectWithoutPlanInput[]
    createMany?: ReviewCreateManyPlanInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type EnumTravelTypeFieldUpdateOperationsInput = {
    set?: $Enums.TravelType
  }

  export type UserUpdateOneRequiredWithoutTravelPlansNestedInput = {
    create?: XOR<UserCreateWithoutTravelPlansInput, UserUncheckedCreateWithoutTravelPlansInput>
    connectOrCreate?: UserCreateOrConnectWithoutTravelPlansInput
    upsert?: UserUpsertWithoutTravelPlansInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTravelPlansInput, UserUpdateWithoutTravelPlansInput>, UserUncheckedUpdateWithoutTravelPlansInput>
  }

  export type TravelPlanParticipantUpdateManyWithoutPlanNestedInput = {
    create?: XOR<TravelPlanParticipantCreateWithoutPlanInput, TravelPlanParticipantUncheckedCreateWithoutPlanInput> | TravelPlanParticipantCreateWithoutPlanInput[] | TravelPlanParticipantUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: TravelPlanParticipantCreateOrConnectWithoutPlanInput | TravelPlanParticipantCreateOrConnectWithoutPlanInput[]
    upsert?: TravelPlanParticipantUpsertWithWhereUniqueWithoutPlanInput | TravelPlanParticipantUpsertWithWhereUniqueWithoutPlanInput[]
    createMany?: TravelPlanParticipantCreateManyPlanInputEnvelope
    set?: TravelPlanParticipantWhereUniqueInput | TravelPlanParticipantWhereUniqueInput[]
    disconnect?: TravelPlanParticipantWhereUniqueInput | TravelPlanParticipantWhereUniqueInput[]
    delete?: TravelPlanParticipantWhereUniqueInput | TravelPlanParticipantWhereUniqueInput[]
    connect?: TravelPlanParticipantWhereUniqueInput | TravelPlanParticipantWhereUniqueInput[]
    update?: TravelPlanParticipantUpdateWithWhereUniqueWithoutPlanInput | TravelPlanParticipantUpdateWithWhereUniqueWithoutPlanInput[]
    updateMany?: TravelPlanParticipantUpdateManyWithWhereWithoutPlanInput | TravelPlanParticipantUpdateManyWithWhereWithoutPlanInput[]
    deleteMany?: TravelPlanParticipantScalarWhereInput | TravelPlanParticipantScalarWhereInput[]
  }

  export type TravelPlanJoinRequestUpdateManyWithoutPlanNestedInput = {
    create?: XOR<TravelPlanJoinRequestCreateWithoutPlanInput, TravelPlanJoinRequestUncheckedCreateWithoutPlanInput> | TravelPlanJoinRequestCreateWithoutPlanInput[] | TravelPlanJoinRequestUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: TravelPlanJoinRequestCreateOrConnectWithoutPlanInput | TravelPlanJoinRequestCreateOrConnectWithoutPlanInput[]
    upsert?: TravelPlanJoinRequestUpsertWithWhereUniqueWithoutPlanInput | TravelPlanJoinRequestUpsertWithWhereUniqueWithoutPlanInput[]
    createMany?: TravelPlanJoinRequestCreateManyPlanInputEnvelope
    set?: TravelPlanJoinRequestWhereUniqueInput | TravelPlanJoinRequestWhereUniqueInput[]
    disconnect?: TravelPlanJoinRequestWhereUniqueInput | TravelPlanJoinRequestWhereUniqueInput[]
    delete?: TravelPlanJoinRequestWhereUniqueInput | TravelPlanJoinRequestWhereUniqueInput[]
    connect?: TravelPlanJoinRequestWhereUniqueInput | TravelPlanJoinRequestWhereUniqueInput[]
    update?: TravelPlanJoinRequestUpdateWithWhereUniqueWithoutPlanInput | TravelPlanJoinRequestUpdateWithWhereUniqueWithoutPlanInput[]
    updateMany?: TravelPlanJoinRequestUpdateManyWithWhereWithoutPlanInput | TravelPlanJoinRequestUpdateManyWithWhereWithoutPlanInput[]
    deleteMany?: TravelPlanJoinRequestScalarWhereInput | TravelPlanJoinRequestScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutPlanNestedInput = {
    create?: XOR<ReviewCreateWithoutPlanInput, ReviewUncheckedCreateWithoutPlanInput> | ReviewCreateWithoutPlanInput[] | ReviewUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutPlanInput | ReviewCreateOrConnectWithoutPlanInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutPlanInput | ReviewUpsertWithWhereUniqueWithoutPlanInput[]
    createMany?: ReviewCreateManyPlanInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutPlanInput | ReviewUpdateWithWhereUniqueWithoutPlanInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutPlanInput | ReviewUpdateManyWithWhereWithoutPlanInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type TravelPlanParticipantUncheckedUpdateManyWithoutPlanNestedInput = {
    create?: XOR<TravelPlanParticipantCreateWithoutPlanInput, TravelPlanParticipantUncheckedCreateWithoutPlanInput> | TravelPlanParticipantCreateWithoutPlanInput[] | TravelPlanParticipantUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: TravelPlanParticipantCreateOrConnectWithoutPlanInput | TravelPlanParticipantCreateOrConnectWithoutPlanInput[]
    upsert?: TravelPlanParticipantUpsertWithWhereUniqueWithoutPlanInput | TravelPlanParticipantUpsertWithWhereUniqueWithoutPlanInput[]
    createMany?: TravelPlanParticipantCreateManyPlanInputEnvelope
    set?: TravelPlanParticipantWhereUniqueInput | TravelPlanParticipantWhereUniqueInput[]
    disconnect?: TravelPlanParticipantWhereUniqueInput | TravelPlanParticipantWhereUniqueInput[]
    delete?: TravelPlanParticipantWhereUniqueInput | TravelPlanParticipantWhereUniqueInput[]
    connect?: TravelPlanParticipantWhereUniqueInput | TravelPlanParticipantWhereUniqueInput[]
    update?: TravelPlanParticipantUpdateWithWhereUniqueWithoutPlanInput | TravelPlanParticipantUpdateWithWhereUniqueWithoutPlanInput[]
    updateMany?: TravelPlanParticipantUpdateManyWithWhereWithoutPlanInput | TravelPlanParticipantUpdateManyWithWhereWithoutPlanInput[]
    deleteMany?: TravelPlanParticipantScalarWhereInput | TravelPlanParticipantScalarWhereInput[]
  }

  export type TravelPlanJoinRequestUncheckedUpdateManyWithoutPlanNestedInput = {
    create?: XOR<TravelPlanJoinRequestCreateWithoutPlanInput, TravelPlanJoinRequestUncheckedCreateWithoutPlanInput> | TravelPlanJoinRequestCreateWithoutPlanInput[] | TravelPlanJoinRequestUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: TravelPlanJoinRequestCreateOrConnectWithoutPlanInput | TravelPlanJoinRequestCreateOrConnectWithoutPlanInput[]
    upsert?: TravelPlanJoinRequestUpsertWithWhereUniqueWithoutPlanInput | TravelPlanJoinRequestUpsertWithWhereUniqueWithoutPlanInput[]
    createMany?: TravelPlanJoinRequestCreateManyPlanInputEnvelope
    set?: TravelPlanJoinRequestWhereUniqueInput | TravelPlanJoinRequestWhereUniqueInput[]
    disconnect?: TravelPlanJoinRequestWhereUniqueInput | TravelPlanJoinRequestWhereUniqueInput[]
    delete?: TravelPlanJoinRequestWhereUniqueInput | TravelPlanJoinRequestWhereUniqueInput[]
    connect?: TravelPlanJoinRequestWhereUniqueInput | TravelPlanJoinRequestWhereUniqueInput[]
    update?: TravelPlanJoinRequestUpdateWithWhereUniqueWithoutPlanInput | TravelPlanJoinRequestUpdateWithWhereUniqueWithoutPlanInput[]
    updateMany?: TravelPlanJoinRequestUpdateManyWithWhereWithoutPlanInput | TravelPlanJoinRequestUpdateManyWithWhereWithoutPlanInput[]
    deleteMany?: TravelPlanJoinRequestScalarWhereInput | TravelPlanJoinRequestScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutPlanNestedInput = {
    create?: XOR<ReviewCreateWithoutPlanInput, ReviewUncheckedCreateWithoutPlanInput> | ReviewCreateWithoutPlanInput[] | ReviewUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutPlanInput | ReviewCreateOrConnectWithoutPlanInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutPlanInput | ReviewUpsertWithWhereUniqueWithoutPlanInput[]
    createMany?: ReviewCreateManyPlanInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutPlanInput | ReviewUpdateWithWhereUniqueWithoutPlanInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutPlanInput | ReviewUpdateManyWithWhereWithoutPlanInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type TravelPlanCreateNestedOneWithoutParticipantsInput = {
    create?: XOR<TravelPlanCreateWithoutParticipantsInput, TravelPlanUncheckedCreateWithoutParticipantsInput>
    connectOrCreate?: TravelPlanCreateOrConnectWithoutParticipantsInput
    connect?: TravelPlanWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutParticipantsInput = {
    create?: XOR<UserCreateWithoutParticipantsInput, UserUncheckedCreateWithoutParticipantsInput>
    connectOrCreate?: UserCreateOrConnectWithoutParticipantsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumParticipantStatusFieldUpdateOperationsInput = {
    set?: $Enums.ParticipantStatus
  }

  export type TravelPlanUpdateOneRequiredWithoutParticipantsNestedInput = {
    create?: XOR<TravelPlanCreateWithoutParticipantsInput, TravelPlanUncheckedCreateWithoutParticipantsInput>
    connectOrCreate?: TravelPlanCreateOrConnectWithoutParticipantsInput
    upsert?: TravelPlanUpsertWithoutParticipantsInput
    connect?: TravelPlanWhereUniqueInput
    update?: XOR<XOR<TravelPlanUpdateToOneWithWhereWithoutParticipantsInput, TravelPlanUpdateWithoutParticipantsInput>, TravelPlanUncheckedUpdateWithoutParticipantsInput>
  }

  export type UserUpdateOneRequiredWithoutParticipantsNestedInput = {
    create?: XOR<UserCreateWithoutParticipantsInput, UserUncheckedCreateWithoutParticipantsInput>
    connectOrCreate?: UserCreateOrConnectWithoutParticipantsInput
    upsert?: UserUpsertWithoutParticipantsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutParticipantsInput, UserUpdateWithoutParticipantsInput>, UserUncheckedUpdateWithoutParticipantsInput>
  }

  export type TravelPlanCreateNestedOneWithoutJoinRequestsInput = {
    create?: XOR<TravelPlanCreateWithoutJoinRequestsInput, TravelPlanUncheckedCreateWithoutJoinRequestsInput>
    connectOrCreate?: TravelPlanCreateOrConnectWithoutJoinRequestsInput
    connect?: TravelPlanWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutJoinRequestsInput = {
    create?: XOR<UserCreateWithoutJoinRequestsInput, UserUncheckedCreateWithoutJoinRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutJoinRequestsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumJoinStatusFieldUpdateOperationsInput = {
    set?: $Enums.JoinStatus
  }

  export type TravelPlanUpdateOneRequiredWithoutJoinRequestsNestedInput = {
    create?: XOR<TravelPlanCreateWithoutJoinRequestsInput, TravelPlanUncheckedCreateWithoutJoinRequestsInput>
    connectOrCreate?: TravelPlanCreateOrConnectWithoutJoinRequestsInput
    upsert?: TravelPlanUpsertWithoutJoinRequestsInput
    connect?: TravelPlanWhereUniqueInput
    update?: XOR<XOR<TravelPlanUpdateToOneWithWhereWithoutJoinRequestsInput, TravelPlanUpdateWithoutJoinRequestsInput>, TravelPlanUncheckedUpdateWithoutJoinRequestsInput>
  }

  export type UserUpdateOneRequiredWithoutJoinRequestsNestedInput = {
    create?: XOR<UserCreateWithoutJoinRequestsInput, UserUncheckedCreateWithoutJoinRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutJoinRequestsInput
    upsert?: UserUpsertWithoutJoinRequestsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutJoinRequestsInput, UserUpdateWithoutJoinRequestsInput>, UserUncheckedUpdateWithoutJoinRequestsInput>
  }

  export type UserCreateNestedOneWithoutGivenReviewsInput = {
    create?: XOR<UserCreateWithoutGivenReviewsInput, UserUncheckedCreateWithoutGivenReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutGivenReviewsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReceivedReviewsInput = {
    create?: XOR<UserCreateWithoutReceivedReviewsInput, UserUncheckedCreateWithoutReceivedReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedReviewsInput
    connect?: UserWhereUniqueInput
  }

  export type TravelPlanCreateNestedOneWithoutReviewsInput = {
    create?: XOR<TravelPlanCreateWithoutReviewsInput, TravelPlanUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: TravelPlanCreateOrConnectWithoutReviewsInput
    connect?: TravelPlanWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutGivenReviewsNestedInput = {
    create?: XOR<UserCreateWithoutGivenReviewsInput, UserUncheckedCreateWithoutGivenReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutGivenReviewsInput
    upsert?: UserUpsertWithoutGivenReviewsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGivenReviewsInput, UserUpdateWithoutGivenReviewsInput>, UserUncheckedUpdateWithoutGivenReviewsInput>
  }

  export type UserUpdateOneRequiredWithoutReceivedReviewsNestedInput = {
    create?: XOR<UserCreateWithoutReceivedReviewsInput, UserUncheckedCreateWithoutReceivedReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedReviewsInput
    upsert?: UserUpsertWithoutReceivedReviewsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReceivedReviewsInput, UserUpdateWithoutReceivedReviewsInput>, UserUncheckedUpdateWithoutReceivedReviewsInput>
  }

  export type TravelPlanUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<TravelPlanCreateWithoutReviewsInput, TravelPlanUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: TravelPlanCreateOrConnectWithoutReviewsInput
    upsert?: TravelPlanUpsertWithoutReviewsInput
    connect?: TravelPlanWhereUniqueInput
    update?: XOR<XOR<TravelPlanUpdateToOneWithWhereWithoutReviewsInput, TravelPlanUpdateWithoutReviewsInput>, TravelPlanUncheckedUpdateWithoutReviewsInput>
  }

  export type UserCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<UserCreateWithoutPaymentsInput, UserUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPaymentsInput
    connect?: UserWhereUniqueInput
  }

  export type SubscriptionCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<SubscriptionCreateWithoutPaymentsInput, SubscriptionUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutPaymentsInput
    connect?: SubscriptionWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumPaymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaymentStatus
  }

  export type UserUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<UserCreateWithoutPaymentsInput, UserUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPaymentsInput
    upsert?: UserUpsertWithoutPaymentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPaymentsInput, UserUpdateWithoutPaymentsInput>, UserUncheckedUpdateWithoutPaymentsInput>
  }

  export type SubscriptionUpdateOneWithoutPaymentsNestedInput = {
    create?: XOR<SubscriptionCreateWithoutPaymentsInput, SubscriptionUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutPaymentsInput
    upsert?: SubscriptionUpsertWithoutPaymentsInput
    disconnect?: SubscriptionWhereInput | boolean
    delete?: SubscriptionWhereInput | boolean
    connect?: SubscriptionWhereUniqueInput
    update?: XOR<XOR<SubscriptionUpdateToOneWithWhereWithoutPaymentsInput, SubscriptionUpdateWithoutPaymentsInput>, SubscriptionUncheckedUpdateWithoutPaymentsInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PaymentCreateNestedManyWithoutSubscriptionInput = {
    create?: XOR<PaymentCreateWithoutSubscriptionInput, PaymentUncheckedCreateWithoutSubscriptionInput> | PaymentCreateWithoutSubscriptionInput[] | PaymentUncheckedCreateWithoutSubscriptionInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutSubscriptionInput | PaymentCreateOrConnectWithoutSubscriptionInput[]
    createMany?: PaymentCreateManySubscriptionInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutSubscriptionInput = {
    create?: XOR<UserCreateWithoutSubscriptionInput, UserUncheckedCreateWithoutSubscriptionInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubscriptionInput
    connect?: UserWhereUniqueInput
  }

  export type PaymentUncheckedCreateNestedManyWithoutSubscriptionInput = {
    create?: XOR<PaymentCreateWithoutSubscriptionInput, PaymentUncheckedCreateWithoutSubscriptionInput> | PaymentCreateWithoutSubscriptionInput[] | PaymentUncheckedCreateWithoutSubscriptionInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutSubscriptionInput | PaymentCreateOrConnectWithoutSubscriptionInput[]
    createMany?: PaymentCreateManySubscriptionInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type EnumSubscriptionStatusFieldUpdateOperationsInput = {
    set?: $Enums.SubscriptionStatus
  }

  export type EnumPlanTypeFieldUpdateOperationsInput = {
    set?: $Enums.PlanType
  }

  export type PaymentUpdateManyWithoutSubscriptionNestedInput = {
    create?: XOR<PaymentCreateWithoutSubscriptionInput, PaymentUncheckedCreateWithoutSubscriptionInput> | PaymentCreateWithoutSubscriptionInput[] | PaymentUncheckedCreateWithoutSubscriptionInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutSubscriptionInput | PaymentCreateOrConnectWithoutSubscriptionInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutSubscriptionInput | PaymentUpsertWithWhereUniqueWithoutSubscriptionInput[]
    createMany?: PaymentCreateManySubscriptionInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutSubscriptionInput | PaymentUpdateWithWhereUniqueWithoutSubscriptionInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutSubscriptionInput | PaymentUpdateManyWithWhereWithoutSubscriptionInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutSubscriptionNestedInput = {
    create?: XOR<UserCreateWithoutSubscriptionInput, UserUncheckedCreateWithoutSubscriptionInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubscriptionInput
    upsert?: UserUpsertWithoutSubscriptionInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSubscriptionInput, UserUpdateWithoutSubscriptionInput>, UserUncheckedUpdateWithoutSubscriptionInput>
  }

  export type PaymentUncheckedUpdateManyWithoutSubscriptionNestedInput = {
    create?: XOR<PaymentCreateWithoutSubscriptionInput, PaymentUncheckedCreateWithoutSubscriptionInput> | PaymentCreateWithoutSubscriptionInput[] | PaymentUncheckedCreateWithoutSubscriptionInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutSubscriptionInput | PaymentCreateOrConnectWithoutSubscriptionInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutSubscriptionInput | PaymentUpsertWithWhereUniqueWithoutSubscriptionInput[]
    createMany?: PaymentCreateManySubscriptionInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutSubscriptionInput | PaymentUpdateWithWhereUniqueWithoutSubscriptionInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutSubscriptionInput | PaymentUpdateManyWithWhereWithoutSubscriptionInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserStatusFilter<$PrismaModel>
    _max?: NestedEnumUserStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumTravelTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TravelType | EnumTravelTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TravelType[] | ListEnumTravelTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TravelType[] | ListEnumTravelTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTravelTypeFilter<$PrismaModel> | $Enums.TravelType
  }

  export type NestedEnumTravelTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TravelType | EnumTravelTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TravelType[] | ListEnumTravelTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TravelType[] | ListEnumTravelTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTravelTypeWithAggregatesFilter<$PrismaModel> | $Enums.TravelType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTravelTypeFilter<$PrismaModel>
    _max?: NestedEnumTravelTypeFilter<$PrismaModel>
  }

  export type NestedEnumParticipantStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ParticipantStatus | EnumParticipantStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ParticipantStatus[] | ListEnumParticipantStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ParticipantStatus[] | ListEnumParticipantStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumParticipantStatusFilter<$PrismaModel> | $Enums.ParticipantStatus
  }

  export type NestedEnumParticipantStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ParticipantStatus | EnumParticipantStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ParticipantStatus[] | ListEnumParticipantStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ParticipantStatus[] | ListEnumParticipantStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumParticipantStatusWithAggregatesFilter<$PrismaModel> | $Enums.ParticipantStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumParticipantStatusFilter<$PrismaModel>
    _max?: NestedEnumParticipantStatusFilter<$PrismaModel>
  }

  export type NestedEnumJoinStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.JoinStatus | EnumJoinStatusFieldRefInput<$PrismaModel>
    in?: $Enums.JoinStatus[] | ListEnumJoinStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.JoinStatus[] | ListEnumJoinStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumJoinStatusFilter<$PrismaModel> | $Enums.JoinStatus
  }

  export type NestedEnumJoinStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JoinStatus | EnumJoinStatusFieldRefInput<$PrismaModel>
    in?: $Enums.JoinStatus[] | ListEnumJoinStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.JoinStatus[] | ListEnumJoinStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumJoinStatusWithAggregatesFilter<$PrismaModel> | $Enums.JoinStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumJoinStatusFilter<$PrismaModel>
    _max?: NestedEnumJoinStatusFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type NestedEnumSubscriptionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionStatus | EnumSubscriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionStatusFilter<$PrismaModel> | $Enums.SubscriptionStatus
  }

  export type NestedEnumPlanTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PlanType | EnumPlanTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PlanType[] | ListEnumPlanTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlanType[] | ListEnumPlanTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPlanTypeFilter<$PrismaModel> | $Enums.PlanType
  }

  export type NestedEnumSubscriptionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionStatus | EnumSubscriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionStatusWithAggregatesFilter<$PrismaModel> | $Enums.SubscriptionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubscriptionStatusFilter<$PrismaModel>
    _max?: NestedEnumSubscriptionStatusFilter<$PrismaModel>
  }

  export type NestedEnumPlanTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PlanType | EnumPlanTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PlanType[] | ListEnumPlanTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlanType[] | ListEnumPlanTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPlanTypeWithAggregatesFilter<$PrismaModel> | $Enums.PlanType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPlanTypeFilter<$PrismaModel>
    _max?: NestedEnumPlanTypeFilter<$PrismaModel>
  }

  export type TravelPlanCreateWithoutUserInput = {
    id?: string
    destination: string
    startDate: Date | string
    endDate: Date | string
    budgetRange?: string | null
    travelType: $Enums.TravelType
    description?: string | null
    visibility?: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    participants?: TravelPlanParticipantCreateNestedManyWithoutPlanInput
    joinRequests?: TravelPlanJoinRequestCreateNestedManyWithoutPlanInput
    reviews?: ReviewCreateNestedManyWithoutPlanInput
  }

  export type TravelPlanUncheckedCreateWithoutUserInput = {
    id?: string
    destination: string
    startDate: Date | string
    endDate: Date | string
    budgetRange?: string | null
    travelType: $Enums.TravelType
    description?: string | null
    visibility?: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    participants?: TravelPlanParticipantUncheckedCreateNestedManyWithoutPlanInput
    joinRequests?: TravelPlanJoinRequestUncheckedCreateNestedManyWithoutPlanInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutPlanInput
  }

  export type TravelPlanCreateOrConnectWithoutUserInput = {
    where: TravelPlanWhereUniqueInput
    create: XOR<TravelPlanCreateWithoutUserInput, TravelPlanUncheckedCreateWithoutUserInput>
  }

  export type TravelPlanCreateManyUserInputEnvelope = {
    data: TravelPlanCreateManyUserInput | TravelPlanCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TravelPlanJoinRequestCreateWithoutRequesterInput = {
    id?: string
    status?: $Enums.JoinStatus
    plan: TravelPlanCreateNestedOneWithoutJoinRequestsInput
  }

  export type TravelPlanJoinRequestUncheckedCreateWithoutRequesterInput = {
    id?: string
    planId: string
    status?: $Enums.JoinStatus
  }

  export type TravelPlanJoinRequestCreateOrConnectWithoutRequesterInput = {
    where: TravelPlanJoinRequestWhereUniqueInput
    create: XOR<TravelPlanJoinRequestCreateWithoutRequesterInput, TravelPlanJoinRequestUncheckedCreateWithoutRequesterInput>
  }

  export type TravelPlanJoinRequestCreateManyRequesterInputEnvelope = {
    data: TravelPlanJoinRequestCreateManyRequesterInput | TravelPlanJoinRequestCreateManyRequesterInput[]
    skipDuplicates?: boolean
  }

  export type TravelPlanParticipantCreateWithoutUserInput = {
    id?: string
    joinedAt?: Date | string
    status?: $Enums.ParticipantStatus
    plan: TravelPlanCreateNestedOneWithoutParticipantsInput
  }

  export type TravelPlanParticipantUncheckedCreateWithoutUserInput = {
    id?: string
    planId: string
    joinedAt?: Date | string
    status?: $Enums.ParticipantStatus
  }

  export type TravelPlanParticipantCreateOrConnectWithoutUserInput = {
    where: TravelPlanParticipantWhereUniqueInput
    create: XOR<TravelPlanParticipantCreateWithoutUserInput, TravelPlanParticipantUncheckedCreateWithoutUserInput>
  }

  export type TravelPlanParticipantCreateManyUserInputEnvelope = {
    data: TravelPlanParticipantCreateManyUserInput | TravelPlanParticipantCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ReviewCreateWithoutReviewerInput = {
    id?: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    targetUser: UserCreateNestedOneWithoutReceivedReviewsInput
    plan: TravelPlanCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateWithoutReviewerInput = {
    id?: string
    targetUserId: string
    planId: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type ReviewCreateOrConnectWithoutReviewerInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutReviewerInput, ReviewUncheckedCreateWithoutReviewerInput>
  }

  export type ReviewCreateManyReviewerInputEnvelope = {
    data: ReviewCreateManyReviewerInput | ReviewCreateManyReviewerInput[]
    skipDuplicates?: boolean
  }

  export type ReviewCreateWithoutTargetUserInput = {
    id?: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    reviewer: UserCreateNestedOneWithoutGivenReviewsInput
    plan: TravelPlanCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateWithoutTargetUserInput = {
    id?: string
    reviewerId: string
    planId: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type ReviewCreateOrConnectWithoutTargetUserInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutTargetUserInput, ReviewUncheckedCreateWithoutTargetUserInput>
  }

  export type ReviewCreateManyTargetUserInputEnvelope = {
    data: ReviewCreateManyTargetUserInput | ReviewCreateManyTargetUserInput[]
    skipDuplicates?: boolean
  }

  export type PaymentCreateWithoutUserInput = {
    id?: string
    amount: number
    currency?: string
    stripeInvoiceId: string
    stripePaymentIntent?: string | null
    status?: $Enums.PaymentStatus
    createdAt?: Date | string
    subscription?: SubscriptionCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentUncheckedCreateWithoutUserInput = {
    id?: string
    subscriptionId?: number | null
    amount: number
    currency?: string
    stripeInvoiceId: string
    stripePaymentIntent?: string | null
    status?: $Enums.PaymentStatus
    createdAt?: Date | string
  }

  export type PaymentCreateOrConnectWithoutUserInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput>
  }

  export type PaymentCreateManyUserInputEnvelope = {
    data: PaymentCreateManyUserInput | PaymentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SubscriptionCreateWithoutUserInput = {
    stripeCustomerId: string
    stripeSubscriptionId: string
    status: $Enums.SubscriptionStatus
    plan: $Enums.PlanType
    currentPeriodEnd: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: PaymentCreateNestedManyWithoutSubscriptionInput
  }

  export type SubscriptionUncheckedCreateWithoutUserInput = {
    id?: number
    stripeCustomerId: string
    stripeSubscriptionId: string
    status: $Enums.SubscriptionStatus
    plan: $Enums.PlanType
    currentPeriodEnd: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: PaymentUncheckedCreateNestedManyWithoutSubscriptionInput
  }

  export type SubscriptionCreateOrConnectWithoutUserInput = {
    where: SubscriptionWhereUniqueInput
    create: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput>
  }

  export type TravelPlanUpsertWithWhereUniqueWithoutUserInput = {
    where: TravelPlanWhereUniqueInput
    update: XOR<TravelPlanUpdateWithoutUserInput, TravelPlanUncheckedUpdateWithoutUserInput>
    create: XOR<TravelPlanCreateWithoutUserInput, TravelPlanUncheckedCreateWithoutUserInput>
  }

  export type TravelPlanUpdateWithWhereUniqueWithoutUserInput = {
    where: TravelPlanWhereUniqueInput
    data: XOR<TravelPlanUpdateWithoutUserInput, TravelPlanUncheckedUpdateWithoutUserInput>
  }

  export type TravelPlanUpdateManyWithWhereWithoutUserInput = {
    where: TravelPlanScalarWhereInput
    data: XOR<TravelPlanUpdateManyMutationInput, TravelPlanUncheckedUpdateManyWithoutUserInput>
  }

  export type TravelPlanScalarWhereInput = {
    AND?: TravelPlanScalarWhereInput | TravelPlanScalarWhereInput[]
    OR?: TravelPlanScalarWhereInput[]
    NOT?: TravelPlanScalarWhereInput | TravelPlanScalarWhereInput[]
    id?: StringFilter<"TravelPlan"> | string
    userId?: StringFilter<"TravelPlan"> | string
    destination?: StringFilter<"TravelPlan"> | string
    startDate?: DateTimeFilter<"TravelPlan"> | Date | string
    endDate?: DateTimeFilter<"TravelPlan"> | Date | string
    budgetRange?: StringNullableFilter<"TravelPlan"> | string | null
    travelType?: EnumTravelTypeFilter<"TravelPlan"> | $Enums.TravelType
    description?: StringNullableFilter<"TravelPlan"> | string | null
    visibility?: BoolFilter<"TravelPlan"> | boolean
    isDeleted?: BoolFilter<"TravelPlan"> | boolean
    createdAt?: DateTimeFilter<"TravelPlan"> | Date | string
    updatedAt?: DateTimeFilter<"TravelPlan"> | Date | string
  }

  export type TravelPlanJoinRequestUpsertWithWhereUniqueWithoutRequesterInput = {
    where: TravelPlanJoinRequestWhereUniqueInput
    update: XOR<TravelPlanJoinRequestUpdateWithoutRequesterInput, TravelPlanJoinRequestUncheckedUpdateWithoutRequesterInput>
    create: XOR<TravelPlanJoinRequestCreateWithoutRequesterInput, TravelPlanJoinRequestUncheckedCreateWithoutRequesterInput>
  }

  export type TravelPlanJoinRequestUpdateWithWhereUniqueWithoutRequesterInput = {
    where: TravelPlanJoinRequestWhereUniqueInput
    data: XOR<TravelPlanJoinRequestUpdateWithoutRequesterInput, TravelPlanJoinRequestUncheckedUpdateWithoutRequesterInput>
  }

  export type TravelPlanJoinRequestUpdateManyWithWhereWithoutRequesterInput = {
    where: TravelPlanJoinRequestScalarWhereInput
    data: XOR<TravelPlanJoinRequestUpdateManyMutationInput, TravelPlanJoinRequestUncheckedUpdateManyWithoutRequesterInput>
  }

  export type TravelPlanJoinRequestScalarWhereInput = {
    AND?: TravelPlanJoinRequestScalarWhereInput | TravelPlanJoinRequestScalarWhereInput[]
    OR?: TravelPlanJoinRequestScalarWhereInput[]
    NOT?: TravelPlanJoinRequestScalarWhereInput | TravelPlanJoinRequestScalarWhereInput[]
    id?: StringFilter<"TravelPlanJoinRequest"> | string
    planId?: StringFilter<"TravelPlanJoinRequest"> | string
    requesterId?: StringFilter<"TravelPlanJoinRequest"> | string
    status?: EnumJoinStatusFilter<"TravelPlanJoinRequest"> | $Enums.JoinStatus
  }

  export type TravelPlanParticipantUpsertWithWhereUniqueWithoutUserInput = {
    where: TravelPlanParticipantWhereUniqueInput
    update: XOR<TravelPlanParticipantUpdateWithoutUserInput, TravelPlanParticipantUncheckedUpdateWithoutUserInput>
    create: XOR<TravelPlanParticipantCreateWithoutUserInput, TravelPlanParticipantUncheckedCreateWithoutUserInput>
  }

  export type TravelPlanParticipantUpdateWithWhereUniqueWithoutUserInput = {
    where: TravelPlanParticipantWhereUniqueInput
    data: XOR<TravelPlanParticipantUpdateWithoutUserInput, TravelPlanParticipantUncheckedUpdateWithoutUserInput>
  }

  export type TravelPlanParticipantUpdateManyWithWhereWithoutUserInput = {
    where: TravelPlanParticipantScalarWhereInput
    data: XOR<TravelPlanParticipantUpdateManyMutationInput, TravelPlanParticipantUncheckedUpdateManyWithoutUserInput>
  }

  export type TravelPlanParticipantScalarWhereInput = {
    AND?: TravelPlanParticipantScalarWhereInput | TravelPlanParticipantScalarWhereInput[]
    OR?: TravelPlanParticipantScalarWhereInput[]
    NOT?: TravelPlanParticipantScalarWhereInput | TravelPlanParticipantScalarWhereInput[]
    id?: StringFilter<"TravelPlanParticipant"> | string
    planId?: StringFilter<"TravelPlanParticipant"> | string
    userId?: StringFilter<"TravelPlanParticipant"> | string
    joinedAt?: DateTimeFilter<"TravelPlanParticipant"> | Date | string
    status?: EnumParticipantStatusFilter<"TravelPlanParticipant"> | $Enums.ParticipantStatus
  }

  export type ReviewUpsertWithWhereUniqueWithoutReviewerInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutReviewerInput, ReviewUncheckedUpdateWithoutReviewerInput>
    create: XOR<ReviewCreateWithoutReviewerInput, ReviewUncheckedCreateWithoutReviewerInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutReviewerInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutReviewerInput, ReviewUncheckedUpdateWithoutReviewerInput>
  }

  export type ReviewUpdateManyWithWhereWithoutReviewerInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutReviewerInput>
  }

  export type ReviewScalarWhereInput = {
    AND?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    OR?: ReviewScalarWhereInput[]
    NOT?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    id?: StringFilter<"Review"> | string
    reviewerId?: StringFilter<"Review"> | string
    targetUserId?: StringFilter<"Review"> | string
    planId?: StringFilter<"Review"> | string
    rating?: IntFilter<"Review"> | number
    comment?: StringNullableFilter<"Review"> | string | null
    createdAt?: DateTimeFilter<"Review"> | Date | string
  }

  export type ReviewUpsertWithWhereUniqueWithoutTargetUserInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutTargetUserInput, ReviewUncheckedUpdateWithoutTargetUserInput>
    create: XOR<ReviewCreateWithoutTargetUserInput, ReviewUncheckedCreateWithoutTargetUserInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutTargetUserInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutTargetUserInput, ReviewUncheckedUpdateWithoutTargetUserInput>
  }

  export type ReviewUpdateManyWithWhereWithoutTargetUserInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutTargetUserInput>
  }

  export type PaymentUpsertWithWhereUniqueWithoutUserInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutUserInput, PaymentUncheckedUpdateWithoutUserInput>
    create: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutUserInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutUserInput, PaymentUncheckedUpdateWithoutUserInput>
  }

  export type PaymentUpdateManyWithWhereWithoutUserInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutUserInput>
  }

  export type PaymentScalarWhereInput = {
    AND?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    OR?: PaymentScalarWhereInput[]
    NOT?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    id?: StringFilter<"Payment"> | string
    userId?: StringFilter<"Payment"> | string
    subscriptionId?: IntNullableFilter<"Payment"> | number | null
    amount?: FloatFilter<"Payment"> | number
    currency?: StringFilter<"Payment"> | string
    stripeInvoiceId?: StringFilter<"Payment"> | string
    stripePaymentIntent?: StringNullableFilter<"Payment"> | string | null
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    createdAt?: DateTimeFilter<"Payment"> | Date | string
  }

  export type SubscriptionUpsertWithoutUserInput = {
    update: XOR<SubscriptionUpdateWithoutUserInput, SubscriptionUncheckedUpdateWithoutUserInput>
    create: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput>
    where?: SubscriptionWhereInput
  }

  export type SubscriptionUpdateToOneWithWhereWithoutUserInput = {
    where?: SubscriptionWhereInput
    data: XOR<SubscriptionUpdateWithoutUserInput, SubscriptionUncheckedUpdateWithoutUserInput>
  }

  export type SubscriptionUpdateWithoutUserInput = {
    stripeCustomerId?: StringFieldUpdateOperationsInput | string
    stripeSubscriptionId?: StringFieldUpdateOperationsInput | string
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    plan?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    currentPeriodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUpdateManyWithoutSubscriptionNestedInput
  }

  export type SubscriptionUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    stripeCustomerId?: StringFieldUpdateOperationsInput | string
    stripeSubscriptionId?: StringFieldUpdateOperationsInput | string
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    plan?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    currentPeriodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUncheckedUpdateManyWithoutSubscriptionNestedInput
  }

  export type UserCreateWithoutTravelPlansInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.UserRole
    bio?: string | null
    profileImage?: string | null
    currentLocation?: string | null
    gender: $Enums.Gender
    interests?: UserCreateinterestsInput | string[]
    visitedCountries?: UserCreatevisitedCountriesInput | string[]
    verifiedBadge?: boolean
    status?: $Enums.UserStatus
    createdTravelPlans?: UserCreatecreatedTravelPlansInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    joinRequests?: TravelPlanJoinRequestCreateNestedManyWithoutRequesterInput
    participants?: TravelPlanParticipantCreateNestedManyWithoutUserInput
    givenReviews?: ReviewCreateNestedManyWithoutReviewerInput
    receivedReviews?: ReviewCreateNestedManyWithoutTargetUserInput
    payments?: PaymentCreateNestedManyWithoutUserInput
    subscription?: SubscriptionCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTravelPlansInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.UserRole
    bio?: string | null
    profileImage?: string | null
    currentLocation?: string | null
    gender: $Enums.Gender
    interests?: UserCreateinterestsInput | string[]
    visitedCountries?: UserCreatevisitedCountriesInput | string[]
    verifiedBadge?: boolean
    status?: $Enums.UserStatus
    createdTravelPlans?: UserCreatecreatedTravelPlansInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    joinRequests?: TravelPlanJoinRequestUncheckedCreateNestedManyWithoutRequesterInput
    participants?: TravelPlanParticipantUncheckedCreateNestedManyWithoutUserInput
    givenReviews?: ReviewUncheckedCreateNestedManyWithoutReviewerInput
    receivedReviews?: ReviewUncheckedCreateNestedManyWithoutTargetUserInput
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
    subscription?: SubscriptionUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTravelPlansInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTravelPlansInput, UserUncheckedCreateWithoutTravelPlansInput>
  }

  export type TravelPlanParticipantCreateWithoutPlanInput = {
    id?: string
    joinedAt?: Date | string
    status?: $Enums.ParticipantStatus
    user: UserCreateNestedOneWithoutParticipantsInput
  }

  export type TravelPlanParticipantUncheckedCreateWithoutPlanInput = {
    id?: string
    userId: string
    joinedAt?: Date | string
    status?: $Enums.ParticipantStatus
  }

  export type TravelPlanParticipantCreateOrConnectWithoutPlanInput = {
    where: TravelPlanParticipantWhereUniqueInput
    create: XOR<TravelPlanParticipantCreateWithoutPlanInput, TravelPlanParticipantUncheckedCreateWithoutPlanInput>
  }

  export type TravelPlanParticipantCreateManyPlanInputEnvelope = {
    data: TravelPlanParticipantCreateManyPlanInput | TravelPlanParticipantCreateManyPlanInput[]
    skipDuplicates?: boolean
  }

  export type TravelPlanJoinRequestCreateWithoutPlanInput = {
    id?: string
    status?: $Enums.JoinStatus
    requester: UserCreateNestedOneWithoutJoinRequestsInput
  }

  export type TravelPlanJoinRequestUncheckedCreateWithoutPlanInput = {
    id?: string
    requesterId: string
    status?: $Enums.JoinStatus
  }

  export type TravelPlanJoinRequestCreateOrConnectWithoutPlanInput = {
    where: TravelPlanJoinRequestWhereUniqueInput
    create: XOR<TravelPlanJoinRequestCreateWithoutPlanInput, TravelPlanJoinRequestUncheckedCreateWithoutPlanInput>
  }

  export type TravelPlanJoinRequestCreateManyPlanInputEnvelope = {
    data: TravelPlanJoinRequestCreateManyPlanInput | TravelPlanJoinRequestCreateManyPlanInput[]
    skipDuplicates?: boolean
  }

  export type ReviewCreateWithoutPlanInput = {
    id?: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    reviewer: UserCreateNestedOneWithoutGivenReviewsInput
    targetUser: UserCreateNestedOneWithoutReceivedReviewsInput
  }

  export type ReviewUncheckedCreateWithoutPlanInput = {
    id?: string
    reviewerId: string
    targetUserId: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type ReviewCreateOrConnectWithoutPlanInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutPlanInput, ReviewUncheckedCreateWithoutPlanInput>
  }

  export type ReviewCreateManyPlanInputEnvelope = {
    data: ReviewCreateManyPlanInput | ReviewCreateManyPlanInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutTravelPlansInput = {
    update: XOR<UserUpdateWithoutTravelPlansInput, UserUncheckedUpdateWithoutTravelPlansInput>
    create: XOR<UserCreateWithoutTravelPlansInput, UserUncheckedCreateWithoutTravelPlansInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTravelPlansInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTravelPlansInput, UserUncheckedUpdateWithoutTravelPlansInput>
  }

  export type UserUpdateWithoutTravelPlansInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    currentLocation?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    interests?: UserUpdateinterestsInput | string[]
    visitedCountries?: UserUpdatevisitedCountriesInput | string[]
    verifiedBadge?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdTravelPlans?: UserUpdatecreatedTravelPlansInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    joinRequests?: TravelPlanJoinRequestUpdateManyWithoutRequesterNestedInput
    participants?: TravelPlanParticipantUpdateManyWithoutUserNestedInput
    givenReviews?: ReviewUpdateManyWithoutReviewerNestedInput
    receivedReviews?: ReviewUpdateManyWithoutTargetUserNestedInput
    payments?: PaymentUpdateManyWithoutUserNestedInput
    subscription?: SubscriptionUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTravelPlansInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    currentLocation?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    interests?: UserUpdateinterestsInput | string[]
    visitedCountries?: UserUpdatevisitedCountriesInput | string[]
    verifiedBadge?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdTravelPlans?: UserUpdatecreatedTravelPlansInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    joinRequests?: TravelPlanJoinRequestUncheckedUpdateManyWithoutRequesterNestedInput
    participants?: TravelPlanParticipantUncheckedUpdateManyWithoutUserNestedInput
    givenReviews?: ReviewUncheckedUpdateManyWithoutReviewerNestedInput
    receivedReviews?: ReviewUncheckedUpdateManyWithoutTargetUserNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
    subscription?: SubscriptionUncheckedUpdateOneWithoutUserNestedInput
  }

  export type TravelPlanParticipantUpsertWithWhereUniqueWithoutPlanInput = {
    where: TravelPlanParticipantWhereUniqueInput
    update: XOR<TravelPlanParticipantUpdateWithoutPlanInput, TravelPlanParticipantUncheckedUpdateWithoutPlanInput>
    create: XOR<TravelPlanParticipantCreateWithoutPlanInput, TravelPlanParticipantUncheckedCreateWithoutPlanInput>
  }

  export type TravelPlanParticipantUpdateWithWhereUniqueWithoutPlanInput = {
    where: TravelPlanParticipantWhereUniqueInput
    data: XOR<TravelPlanParticipantUpdateWithoutPlanInput, TravelPlanParticipantUncheckedUpdateWithoutPlanInput>
  }

  export type TravelPlanParticipantUpdateManyWithWhereWithoutPlanInput = {
    where: TravelPlanParticipantScalarWhereInput
    data: XOR<TravelPlanParticipantUpdateManyMutationInput, TravelPlanParticipantUncheckedUpdateManyWithoutPlanInput>
  }

  export type TravelPlanJoinRequestUpsertWithWhereUniqueWithoutPlanInput = {
    where: TravelPlanJoinRequestWhereUniqueInput
    update: XOR<TravelPlanJoinRequestUpdateWithoutPlanInput, TravelPlanJoinRequestUncheckedUpdateWithoutPlanInput>
    create: XOR<TravelPlanJoinRequestCreateWithoutPlanInput, TravelPlanJoinRequestUncheckedCreateWithoutPlanInput>
  }

  export type TravelPlanJoinRequestUpdateWithWhereUniqueWithoutPlanInput = {
    where: TravelPlanJoinRequestWhereUniqueInput
    data: XOR<TravelPlanJoinRequestUpdateWithoutPlanInput, TravelPlanJoinRequestUncheckedUpdateWithoutPlanInput>
  }

  export type TravelPlanJoinRequestUpdateManyWithWhereWithoutPlanInput = {
    where: TravelPlanJoinRequestScalarWhereInput
    data: XOR<TravelPlanJoinRequestUpdateManyMutationInput, TravelPlanJoinRequestUncheckedUpdateManyWithoutPlanInput>
  }

  export type ReviewUpsertWithWhereUniqueWithoutPlanInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutPlanInput, ReviewUncheckedUpdateWithoutPlanInput>
    create: XOR<ReviewCreateWithoutPlanInput, ReviewUncheckedCreateWithoutPlanInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutPlanInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutPlanInput, ReviewUncheckedUpdateWithoutPlanInput>
  }

  export type ReviewUpdateManyWithWhereWithoutPlanInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutPlanInput>
  }

  export type TravelPlanCreateWithoutParticipantsInput = {
    id?: string
    destination: string
    startDate: Date | string
    endDate: Date | string
    budgetRange?: string | null
    travelType: $Enums.TravelType
    description?: string | null
    visibility?: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTravelPlansInput
    joinRequests?: TravelPlanJoinRequestCreateNestedManyWithoutPlanInput
    reviews?: ReviewCreateNestedManyWithoutPlanInput
  }

  export type TravelPlanUncheckedCreateWithoutParticipantsInput = {
    id?: string
    userId: string
    destination: string
    startDate: Date | string
    endDate: Date | string
    budgetRange?: string | null
    travelType: $Enums.TravelType
    description?: string | null
    visibility?: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    joinRequests?: TravelPlanJoinRequestUncheckedCreateNestedManyWithoutPlanInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutPlanInput
  }

  export type TravelPlanCreateOrConnectWithoutParticipantsInput = {
    where: TravelPlanWhereUniqueInput
    create: XOR<TravelPlanCreateWithoutParticipantsInput, TravelPlanUncheckedCreateWithoutParticipantsInput>
  }

  export type UserCreateWithoutParticipantsInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.UserRole
    bio?: string | null
    profileImage?: string | null
    currentLocation?: string | null
    gender: $Enums.Gender
    interests?: UserCreateinterestsInput | string[]
    visitedCountries?: UserCreatevisitedCountriesInput | string[]
    verifiedBadge?: boolean
    status?: $Enums.UserStatus
    createdTravelPlans?: UserCreatecreatedTravelPlansInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    travelPlans?: TravelPlanCreateNestedManyWithoutUserInput
    joinRequests?: TravelPlanJoinRequestCreateNestedManyWithoutRequesterInput
    givenReviews?: ReviewCreateNestedManyWithoutReviewerInput
    receivedReviews?: ReviewCreateNestedManyWithoutTargetUserInput
    payments?: PaymentCreateNestedManyWithoutUserInput
    subscription?: SubscriptionCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutParticipantsInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.UserRole
    bio?: string | null
    profileImage?: string | null
    currentLocation?: string | null
    gender: $Enums.Gender
    interests?: UserCreateinterestsInput | string[]
    visitedCountries?: UserCreatevisitedCountriesInput | string[]
    verifiedBadge?: boolean
    status?: $Enums.UserStatus
    createdTravelPlans?: UserCreatecreatedTravelPlansInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    travelPlans?: TravelPlanUncheckedCreateNestedManyWithoutUserInput
    joinRequests?: TravelPlanJoinRequestUncheckedCreateNestedManyWithoutRequesterInput
    givenReviews?: ReviewUncheckedCreateNestedManyWithoutReviewerInput
    receivedReviews?: ReviewUncheckedCreateNestedManyWithoutTargetUserInput
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
    subscription?: SubscriptionUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutParticipantsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutParticipantsInput, UserUncheckedCreateWithoutParticipantsInput>
  }

  export type TravelPlanUpsertWithoutParticipantsInput = {
    update: XOR<TravelPlanUpdateWithoutParticipantsInput, TravelPlanUncheckedUpdateWithoutParticipantsInput>
    create: XOR<TravelPlanCreateWithoutParticipantsInput, TravelPlanUncheckedCreateWithoutParticipantsInput>
    where?: TravelPlanWhereInput
  }

  export type TravelPlanUpdateToOneWithWhereWithoutParticipantsInput = {
    where?: TravelPlanWhereInput
    data: XOR<TravelPlanUpdateWithoutParticipantsInput, TravelPlanUncheckedUpdateWithoutParticipantsInput>
  }

  export type TravelPlanUpdateWithoutParticipantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    budgetRange?: NullableStringFieldUpdateOperationsInput | string | null
    travelType?: EnumTravelTypeFieldUpdateOperationsInput | $Enums.TravelType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    visibility?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTravelPlansNestedInput
    joinRequests?: TravelPlanJoinRequestUpdateManyWithoutPlanNestedInput
    reviews?: ReviewUpdateManyWithoutPlanNestedInput
  }

  export type TravelPlanUncheckedUpdateWithoutParticipantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    budgetRange?: NullableStringFieldUpdateOperationsInput | string | null
    travelType?: EnumTravelTypeFieldUpdateOperationsInput | $Enums.TravelType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    visibility?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    joinRequests?: TravelPlanJoinRequestUncheckedUpdateManyWithoutPlanNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutPlanNestedInput
  }

  export type UserUpsertWithoutParticipantsInput = {
    update: XOR<UserUpdateWithoutParticipantsInput, UserUncheckedUpdateWithoutParticipantsInput>
    create: XOR<UserCreateWithoutParticipantsInput, UserUncheckedCreateWithoutParticipantsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutParticipantsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutParticipantsInput, UserUncheckedUpdateWithoutParticipantsInput>
  }

  export type UserUpdateWithoutParticipantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    currentLocation?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    interests?: UserUpdateinterestsInput | string[]
    visitedCountries?: UserUpdatevisitedCountriesInput | string[]
    verifiedBadge?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdTravelPlans?: UserUpdatecreatedTravelPlansInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    travelPlans?: TravelPlanUpdateManyWithoutUserNestedInput
    joinRequests?: TravelPlanJoinRequestUpdateManyWithoutRequesterNestedInput
    givenReviews?: ReviewUpdateManyWithoutReviewerNestedInput
    receivedReviews?: ReviewUpdateManyWithoutTargetUserNestedInput
    payments?: PaymentUpdateManyWithoutUserNestedInput
    subscription?: SubscriptionUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutParticipantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    currentLocation?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    interests?: UserUpdateinterestsInput | string[]
    visitedCountries?: UserUpdatevisitedCountriesInput | string[]
    verifiedBadge?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdTravelPlans?: UserUpdatecreatedTravelPlansInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    travelPlans?: TravelPlanUncheckedUpdateManyWithoutUserNestedInput
    joinRequests?: TravelPlanJoinRequestUncheckedUpdateManyWithoutRequesterNestedInput
    givenReviews?: ReviewUncheckedUpdateManyWithoutReviewerNestedInput
    receivedReviews?: ReviewUncheckedUpdateManyWithoutTargetUserNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
    subscription?: SubscriptionUncheckedUpdateOneWithoutUserNestedInput
  }

  export type TravelPlanCreateWithoutJoinRequestsInput = {
    id?: string
    destination: string
    startDate: Date | string
    endDate: Date | string
    budgetRange?: string | null
    travelType: $Enums.TravelType
    description?: string | null
    visibility?: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTravelPlansInput
    participants?: TravelPlanParticipantCreateNestedManyWithoutPlanInput
    reviews?: ReviewCreateNestedManyWithoutPlanInput
  }

  export type TravelPlanUncheckedCreateWithoutJoinRequestsInput = {
    id?: string
    userId: string
    destination: string
    startDate: Date | string
    endDate: Date | string
    budgetRange?: string | null
    travelType: $Enums.TravelType
    description?: string | null
    visibility?: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    participants?: TravelPlanParticipantUncheckedCreateNestedManyWithoutPlanInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutPlanInput
  }

  export type TravelPlanCreateOrConnectWithoutJoinRequestsInput = {
    where: TravelPlanWhereUniqueInput
    create: XOR<TravelPlanCreateWithoutJoinRequestsInput, TravelPlanUncheckedCreateWithoutJoinRequestsInput>
  }

  export type UserCreateWithoutJoinRequestsInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.UserRole
    bio?: string | null
    profileImage?: string | null
    currentLocation?: string | null
    gender: $Enums.Gender
    interests?: UserCreateinterestsInput | string[]
    visitedCountries?: UserCreatevisitedCountriesInput | string[]
    verifiedBadge?: boolean
    status?: $Enums.UserStatus
    createdTravelPlans?: UserCreatecreatedTravelPlansInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    travelPlans?: TravelPlanCreateNestedManyWithoutUserInput
    participants?: TravelPlanParticipantCreateNestedManyWithoutUserInput
    givenReviews?: ReviewCreateNestedManyWithoutReviewerInput
    receivedReviews?: ReviewCreateNestedManyWithoutTargetUserInput
    payments?: PaymentCreateNestedManyWithoutUserInput
    subscription?: SubscriptionCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutJoinRequestsInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.UserRole
    bio?: string | null
    profileImage?: string | null
    currentLocation?: string | null
    gender: $Enums.Gender
    interests?: UserCreateinterestsInput | string[]
    visitedCountries?: UserCreatevisitedCountriesInput | string[]
    verifiedBadge?: boolean
    status?: $Enums.UserStatus
    createdTravelPlans?: UserCreatecreatedTravelPlansInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    travelPlans?: TravelPlanUncheckedCreateNestedManyWithoutUserInput
    participants?: TravelPlanParticipantUncheckedCreateNestedManyWithoutUserInput
    givenReviews?: ReviewUncheckedCreateNestedManyWithoutReviewerInput
    receivedReviews?: ReviewUncheckedCreateNestedManyWithoutTargetUserInput
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
    subscription?: SubscriptionUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutJoinRequestsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutJoinRequestsInput, UserUncheckedCreateWithoutJoinRequestsInput>
  }

  export type TravelPlanUpsertWithoutJoinRequestsInput = {
    update: XOR<TravelPlanUpdateWithoutJoinRequestsInput, TravelPlanUncheckedUpdateWithoutJoinRequestsInput>
    create: XOR<TravelPlanCreateWithoutJoinRequestsInput, TravelPlanUncheckedCreateWithoutJoinRequestsInput>
    where?: TravelPlanWhereInput
  }

  export type TravelPlanUpdateToOneWithWhereWithoutJoinRequestsInput = {
    where?: TravelPlanWhereInput
    data: XOR<TravelPlanUpdateWithoutJoinRequestsInput, TravelPlanUncheckedUpdateWithoutJoinRequestsInput>
  }

  export type TravelPlanUpdateWithoutJoinRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    budgetRange?: NullableStringFieldUpdateOperationsInput | string | null
    travelType?: EnumTravelTypeFieldUpdateOperationsInput | $Enums.TravelType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    visibility?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTravelPlansNestedInput
    participants?: TravelPlanParticipantUpdateManyWithoutPlanNestedInput
    reviews?: ReviewUpdateManyWithoutPlanNestedInput
  }

  export type TravelPlanUncheckedUpdateWithoutJoinRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    budgetRange?: NullableStringFieldUpdateOperationsInput | string | null
    travelType?: EnumTravelTypeFieldUpdateOperationsInput | $Enums.TravelType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    visibility?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participants?: TravelPlanParticipantUncheckedUpdateManyWithoutPlanNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutPlanNestedInput
  }

  export type UserUpsertWithoutJoinRequestsInput = {
    update: XOR<UserUpdateWithoutJoinRequestsInput, UserUncheckedUpdateWithoutJoinRequestsInput>
    create: XOR<UserCreateWithoutJoinRequestsInput, UserUncheckedCreateWithoutJoinRequestsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutJoinRequestsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutJoinRequestsInput, UserUncheckedUpdateWithoutJoinRequestsInput>
  }

  export type UserUpdateWithoutJoinRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    currentLocation?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    interests?: UserUpdateinterestsInput | string[]
    visitedCountries?: UserUpdatevisitedCountriesInput | string[]
    verifiedBadge?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdTravelPlans?: UserUpdatecreatedTravelPlansInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    travelPlans?: TravelPlanUpdateManyWithoutUserNestedInput
    participants?: TravelPlanParticipantUpdateManyWithoutUserNestedInput
    givenReviews?: ReviewUpdateManyWithoutReviewerNestedInput
    receivedReviews?: ReviewUpdateManyWithoutTargetUserNestedInput
    payments?: PaymentUpdateManyWithoutUserNestedInput
    subscription?: SubscriptionUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutJoinRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    currentLocation?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    interests?: UserUpdateinterestsInput | string[]
    visitedCountries?: UserUpdatevisitedCountriesInput | string[]
    verifiedBadge?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdTravelPlans?: UserUpdatecreatedTravelPlansInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    travelPlans?: TravelPlanUncheckedUpdateManyWithoutUserNestedInput
    participants?: TravelPlanParticipantUncheckedUpdateManyWithoutUserNestedInput
    givenReviews?: ReviewUncheckedUpdateManyWithoutReviewerNestedInput
    receivedReviews?: ReviewUncheckedUpdateManyWithoutTargetUserNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
    subscription?: SubscriptionUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutGivenReviewsInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.UserRole
    bio?: string | null
    profileImage?: string | null
    currentLocation?: string | null
    gender: $Enums.Gender
    interests?: UserCreateinterestsInput | string[]
    visitedCountries?: UserCreatevisitedCountriesInput | string[]
    verifiedBadge?: boolean
    status?: $Enums.UserStatus
    createdTravelPlans?: UserCreatecreatedTravelPlansInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    travelPlans?: TravelPlanCreateNestedManyWithoutUserInput
    joinRequests?: TravelPlanJoinRequestCreateNestedManyWithoutRequesterInput
    participants?: TravelPlanParticipantCreateNestedManyWithoutUserInput
    receivedReviews?: ReviewCreateNestedManyWithoutTargetUserInput
    payments?: PaymentCreateNestedManyWithoutUserInput
    subscription?: SubscriptionCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutGivenReviewsInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.UserRole
    bio?: string | null
    profileImage?: string | null
    currentLocation?: string | null
    gender: $Enums.Gender
    interests?: UserCreateinterestsInput | string[]
    visitedCountries?: UserCreatevisitedCountriesInput | string[]
    verifiedBadge?: boolean
    status?: $Enums.UserStatus
    createdTravelPlans?: UserCreatecreatedTravelPlansInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    travelPlans?: TravelPlanUncheckedCreateNestedManyWithoutUserInput
    joinRequests?: TravelPlanJoinRequestUncheckedCreateNestedManyWithoutRequesterInput
    participants?: TravelPlanParticipantUncheckedCreateNestedManyWithoutUserInput
    receivedReviews?: ReviewUncheckedCreateNestedManyWithoutTargetUserInput
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
    subscription?: SubscriptionUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutGivenReviewsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGivenReviewsInput, UserUncheckedCreateWithoutGivenReviewsInput>
  }

  export type UserCreateWithoutReceivedReviewsInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.UserRole
    bio?: string | null
    profileImage?: string | null
    currentLocation?: string | null
    gender: $Enums.Gender
    interests?: UserCreateinterestsInput | string[]
    visitedCountries?: UserCreatevisitedCountriesInput | string[]
    verifiedBadge?: boolean
    status?: $Enums.UserStatus
    createdTravelPlans?: UserCreatecreatedTravelPlansInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    travelPlans?: TravelPlanCreateNestedManyWithoutUserInput
    joinRequests?: TravelPlanJoinRequestCreateNestedManyWithoutRequesterInput
    participants?: TravelPlanParticipantCreateNestedManyWithoutUserInput
    givenReviews?: ReviewCreateNestedManyWithoutReviewerInput
    payments?: PaymentCreateNestedManyWithoutUserInput
    subscription?: SubscriptionCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReceivedReviewsInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.UserRole
    bio?: string | null
    profileImage?: string | null
    currentLocation?: string | null
    gender: $Enums.Gender
    interests?: UserCreateinterestsInput | string[]
    visitedCountries?: UserCreatevisitedCountriesInput | string[]
    verifiedBadge?: boolean
    status?: $Enums.UserStatus
    createdTravelPlans?: UserCreatecreatedTravelPlansInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    travelPlans?: TravelPlanUncheckedCreateNestedManyWithoutUserInput
    joinRequests?: TravelPlanJoinRequestUncheckedCreateNestedManyWithoutRequesterInput
    participants?: TravelPlanParticipantUncheckedCreateNestedManyWithoutUserInput
    givenReviews?: ReviewUncheckedCreateNestedManyWithoutReviewerInput
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
    subscription?: SubscriptionUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReceivedReviewsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReceivedReviewsInput, UserUncheckedCreateWithoutReceivedReviewsInput>
  }

  export type TravelPlanCreateWithoutReviewsInput = {
    id?: string
    destination: string
    startDate: Date | string
    endDate: Date | string
    budgetRange?: string | null
    travelType: $Enums.TravelType
    description?: string | null
    visibility?: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTravelPlansInput
    participants?: TravelPlanParticipantCreateNestedManyWithoutPlanInput
    joinRequests?: TravelPlanJoinRequestCreateNestedManyWithoutPlanInput
  }

  export type TravelPlanUncheckedCreateWithoutReviewsInput = {
    id?: string
    userId: string
    destination: string
    startDate: Date | string
    endDate: Date | string
    budgetRange?: string | null
    travelType: $Enums.TravelType
    description?: string | null
    visibility?: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    participants?: TravelPlanParticipantUncheckedCreateNestedManyWithoutPlanInput
    joinRequests?: TravelPlanJoinRequestUncheckedCreateNestedManyWithoutPlanInput
  }

  export type TravelPlanCreateOrConnectWithoutReviewsInput = {
    where: TravelPlanWhereUniqueInput
    create: XOR<TravelPlanCreateWithoutReviewsInput, TravelPlanUncheckedCreateWithoutReviewsInput>
  }

  export type UserUpsertWithoutGivenReviewsInput = {
    update: XOR<UserUpdateWithoutGivenReviewsInput, UserUncheckedUpdateWithoutGivenReviewsInput>
    create: XOR<UserCreateWithoutGivenReviewsInput, UserUncheckedCreateWithoutGivenReviewsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGivenReviewsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGivenReviewsInput, UserUncheckedUpdateWithoutGivenReviewsInput>
  }

  export type UserUpdateWithoutGivenReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    currentLocation?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    interests?: UserUpdateinterestsInput | string[]
    visitedCountries?: UserUpdatevisitedCountriesInput | string[]
    verifiedBadge?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdTravelPlans?: UserUpdatecreatedTravelPlansInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    travelPlans?: TravelPlanUpdateManyWithoutUserNestedInput
    joinRequests?: TravelPlanJoinRequestUpdateManyWithoutRequesterNestedInput
    participants?: TravelPlanParticipantUpdateManyWithoutUserNestedInput
    receivedReviews?: ReviewUpdateManyWithoutTargetUserNestedInput
    payments?: PaymentUpdateManyWithoutUserNestedInput
    subscription?: SubscriptionUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutGivenReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    currentLocation?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    interests?: UserUpdateinterestsInput | string[]
    visitedCountries?: UserUpdatevisitedCountriesInput | string[]
    verifiedBadge?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdTravelPlans?: UserUpdatecreatedTravelPlansInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    travelPlans?: TravelPlanUncheckedUpdateManyWithoutUserNestedInput
    joinRequests?: TravelPlanJoinRequestUncheckedUpdateManyWithoutRequesterNestedInput
    participants?: TravelPlanParticipantUncheckedUpdateManyWithoutUserNestedInput
    receivedReviews?: ReviewUncheckedUpdateManyWithoutTargetUserNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
    subscription?: SubscriptionUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserUpsertWithoutReceivedReviewsInput = {
    update: XOR<UserUpdateWithoutReceivedReviewsInput, UserUncheckedUpdateWithoutReceivedReviewsInput>
    create: XOR<UserCreateWithoutReceivedReviewsInput, UserUncheckedCreateWithoutReceivedReviewsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReceivedReviewsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReceivedReviewsInput, UserUncheckedUpdateWithoutReceivedReviewsInput>
  }

  export type UserUpdateWithoutReceivedReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    currentLocation?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    interests?: UserUpdateinterestsInput | string[]
    visitedCountries?: UserUpdatevisitedCountriesInput | string[]
    verifiedBadge?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdTravelPlans?: UserUpdatecreatedTravelPlansInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    travelPlans?: TravelPlanUpdateManyWithoutUserNestedInput
    joinRequests?: TravelPlanJoinRequestUpdateManyWithoutRequesterNestedInput
    participants?: TravelPlanParticipantUpdateManyWithoutUserNestedInput
    givenReviews?: ReviewUpdateManyWithoutReviewerNestedInput
    payments?: PaymentUpdateManyWithoutUserNestedInput
    subscription?: SubscriptionUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReceivedReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    currentLocation?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    interests?: UserUpdateinterestsInput | string[]
    visitedCountries?: UserUpdatevisitedCountriesInput | string[]
    verifiedBadge?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdTravelPlans?: UserUpdatecreatedTravelPlansInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    travelPlans?: TravelPlanUncheckedUpdateManyWithoutUserNestedInput
    joinRequests?: TravelPlanJoinRequestUncheckedUpdateManyWithoutRequesterNestedInput
    participants?: TravelPlanParticipantUncheckedUpdateManyWithoutUserNestedInput
    givenReviews?: ReviewUncheckedUpdateManyWithoutReviewerNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
    subscription?: SubscriptionUncheckedUpdateOneWithoutUserNestedInput
  }

  export type TravelPlanUpsertWithoutReviewsInput = {
    update: XOR<TravelPlanUpdateWithoutReviewsInput, TravelPlanUncheckedUpdateWithoutReviewsInput>
    create: XOR<TravelPlanCreateWithoutReviewsInput, TravelPlanUncheckedCreateWithoutReviewsInput>
    where?: TravelPlanWhereInput
  }

  export type TravelPlanUpdateToOneWithWhereWithoutReviewsInput = {
    where?: TravelPlanWhereInput
    data: XOR<TravelPlanUpdateWithoutReviewsInput, TravelPlanUncheckedUpdateWithoutReviewsInput>
  }

  export type TravelPlanUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    budgetRange?: NullableStringFieldUpdateOperationsInput | string | null
    travelType?: EnumTravelTypeFieldUpdateOperationsInput | $Enums.TravelType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    visibility?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTravelPlansNestedInput
    participants?: TravelPlanParticipantUpdateManyWithoutPlanNestedInput
    joinRequests?: TravelPlanJoinRequestUpdateManyWithoutPlanNestedInput
  }

  export type TravelPlanUncheckedUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    budgetRange?: NullableStringFieldUpdateOperationsInput | string | null
    travelType?: EnumTravelTypeFieldUpdateOperationsInput | $Enums.TravelType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    visibility?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participants?: TravelPlanParticipantUncheckedUpdateManyWithoutPlanNestedInput
    joinRequests?: TravelPlanJoinRequestUncheckedUpdateManyWithoutPlanNestedInput
  }

  export type UserCreateWithoutPaymentsInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.UserRole
    bio?: string | null
    profileImage?: string | null
    currentLocation?: string | null
    gender: $Enums.Gender
    interests?: UserCreateinterestsInput | string[]
    visitedCountries?: UserCreatevisitedCountriesInput | string[]
    verifiedBadge?: boolean
    status?: $Enums.UserStatus
    createdTravelPlans?: UserCreatecreatedTravelPlansInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    travelPlans?: TravelPlanCreateNestedManyWithoutUserInput
    joinRequests?: TravelPlanJoinRequestCreateNestedManyWithoutRequesterInput
    participants?: TravelPlanParticipantCreateNestedManyWithoutUserInput
    givenReviews?: ReviewCreateNestedManyWithoutReviewerInput
    receivedReviews?: ReviewCreateNestedManyWithoutTargetUserInput
    subscription?: SubscriptionCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPaymentsInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.UserRole
    bio?: string | null
    profileImage?: string | null
    currentLocation?: string | null
    gender: $Enums.Gender
    interests?: UserCreateinterestsInput | string[]
    visitedCountries?: UserCreatevisitedCountriesInput | string[]
    verifiedBadge?: boolean
    status?: $Enums.UserStatus
    createdTravelPlans?: UserCreatecreatedTravelPlansInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    travelPlans?: TravelPlanUncheckedCreateNestedManyWithoutUserInput
    joinRequests?: TravelPlanJoinRequestUncheckedCreateNestedManyWithoutRequesterInput
    participants?: TravelPlanParticipantUncheckedCreateNestedManyWithoutUserInput
    givenReviews?: ReviewUncheckedCreateNestedManyWithoutReviewerInput
    receivedReviews?: ReviewUncheckedCreateNestedManyWithoutTargetUserInput
    subscription?: SubscriptionUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPaymentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPaymentsInput, UserUncheckedCreateWithoutPaymentsInput>
  }

  export type SubscriptionCreateWithoutPaymentsInput = {
    stripeCustomerId: string
    stripeSubscriptionId: string
    status: $Enums.SubscriptionStatus
    plan: $Enums.PlanType
    currentPeriodEnd: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSubscriptionInput
  }

  export type SubscriptionUncheckedCreateWithoutPaymentsInput = {
    id?: number
    userId: string
    stripeCustomerId: string
    stripeSubscriptionId: string
    status: $Enums.SubscriptionStatus
    plan: $Enums.PlanType
    currentPeriodEnd: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionCreateOrConnectWithoutPaymentsInput = {
    where: SubscriptionWhereUniqueInput
    create: XOR<SubscriptionCreateWithoutPaymentsInput, SubscriptionUncheckedCreateWithoutPaymentsInput>
  }

  export type UserUpsertWithoutPaymentsInput = {
    update: XOR<UserUpdateWithoutPaymentsInput, UserUncheckedUpdateWithoutPaymentsInput>
    create: XOR<UserCreateWithoutPaymentsInput, UserUncheckedCreateWithoutPaymentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPaymentsInput, UserUncheckedUpdateWithoutPaymentsInput>
  }

  export type UserUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    currentLocation?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    interests?: UserUpdateinterestsInput | string[]
    visitedCountries?: UserUpdatevisitedCountriesInput | string[]
    verifiedBadge?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdTravelPlans?: UserUpdatecreatedTravelPlansInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    travelPlans?: TravelPlanUpdateManyWithoutUserNestedInput
    joinRequests?: TravelPlanJoinRequestUpdateManyWithoutRequesterNestedInput
    participants?: TravelPlanParticipantUpdateManyWithoutUserNestedInput
    givenReviews?: ReviewUpdateManyWithoutReviewerNestedInput
    receivedReviews?: ReviewUpdateManyWithoutTargetUserNestedInput
    subscription?: SubscriptionUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    currentLocation?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    interests?: UserUpdateinterestsInput | string[]
    visitedCountries?: UserUpdatevisitedCountriesInput | string[]
    verifiedBadge?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdTravelPlans?: UserUpdatecreatedTravelPlansInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    travelPlans?: TravelPlanUncheckedUpdateManyWithoutUserNestedInput
    joinRequests?: TravelPlanJoinRequestUncheckedUpdateManyWithoutRequesterNestedInput
    participants?: TravelPlanParticipantUncheckedUpdateManyWithoutUserNestedInput
    givenReviews?: ReviewUncheckedUpdateManyWithoutReviewerNestedInput
    receivedReviews?: ReviewUncheckedUpdateManyWithoutTargetUserNestedInput
    subscription?: SubscriptionUncheckedUpdateOneWithoutUserNestedInput
  }

  export type SubscriptionUpsertWithoutPaymentsInput = {
    update: XOR<SubscriptionUpdateWithoutPaymentsInput, SubscriptionUncheckedUpdateWithoutPaymentsInput>
    create: XOR<SubscriptionCreateWithoutPaymentsInput, SubscriptionUncheckedCreateWithoutPaymentsInput>
    where?: SubscriptionWhereInput
  }

  export type SubscriptionUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: SubscriptionWhereInput
    data: XOR<SubscriptionUpdateWithoutPaymentsInput, SubscriptionUncheckedUpdateWithoutPaymentsInput>
  }

  export type SubscriptionUpdateWithoutPaymentsInput = {
    stripeCustomerId?: StringFieldUpdateOperationsInput | string
    stripeSubscriptionId?: StringFieldUpdateOperationsInput | string
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    plan?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    currentPeriodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSubscriptionNestedInput
  }

  export type SubscriptionUncheckedUpdateWithoutPaymentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    stripeCustomerId?: StringFieldUpdateOperationsInput | string
    stripeSubscriptionId?: StringFieldUpdateOperationsInput | string
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    plan?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    currentPeriodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateWithoutSubscriptionInput = {
    id?: string
    amount: number
    currency?: string
    stripeInvoiceId: string
    stripePaymentIntent?: string | null
    status?: $Enums.PaymentStatus
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentUncheckedCreateWithoutSubscriptionInput = {
    id?: string
    userId: string
    amount: number
    currency?: string
    stripeInvoiceId: string
    stripePaymentIntent?: string | null
    status?: $Enums.PaymentStatus
    createdAt?: Date | string
  }

  export type PaymentCreateOrConnectWithoutSubscriptionInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutSubscriptionInput, PaymentUncheckedCreateWithoutSubscriptionInput>
  }

  export type PaymentCreateManySubscriptionInputEnvelope = {
    data: PaymentCreateManySubscriptionInput | PaymentCreateManySubscriptionInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutSubscriptionInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.UserRole
    bio?: string | null
    profileImage?: string | null
    currentLocation?: string | null
    gender: $Enums.Gender
    interests?: UserCreateinterestsInput | string[]
    visitedCountries?: UserCreatevisitedCountriesInput | string[]
    verifiedBadge?: boolean
    status?: $Enums.UserStatus
    createdTravelPlans?: UserCreatecreatedTravelPlansInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    travelPlans?: TravelPlanCreateNestedManyWithoutUserInput
    joinRequests?: TravelPlanJoinRequestCreateNestedManyWithoutRequesterInput
    participants?: TravelPlanParticipantCreateNestedManyWithoutUserInput
    givenReviews?: ReviewCreateNestedManyWithoutReviewerInput
    receivedReviews?: ReviewCreateNestedManyWithoutTargetUserInput
    payments?: PaymentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSubscriptionInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.UserRole
    bio?: string | null
    profileImage?: string | null
    currentLocation?: string | null
    gender: $Enums.Gender
    interests?: UserCreateinterestsInput | string[]
    visitedCountries?: UserCreatevisitedCountriesInput | string[]
    verifiedBadge?: boolean
    status?: $Enums.UserStatus
    createdTravelPlans?: UserCreatecreatedTravelPlansInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    travelPlans?: TravelPlanUncheckedCreateNestedManyWithoutUserInput
    joinRequests?: TravelPlanJoinRequestUncheckedCreateNestedManyWithoutRequesterInput
    participants?: TravelPlanParticipantUncheckedCreateNestedManyWithoutUserInput
    givenReviews?: ReviewUncheckedCreateNestedManyWithoutReviewerInput
    receivedReviews?: ReviewUncheckedCreateNestedManyWithoutTargetUserInput
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSubscriptionInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSubscriptionInput, UserUncheckedCreateWithoutSubscriptionInput>
  }

  export type PaymentUpsertWithWhereUniqueWithoutSubscriptionInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutSubscriptionInput, PaymentUncheckedUpdateWithoutSubscriptionInput>
    create: XOR<PaymentCreateWithoutSubscriptionInput, PaymentUncheckedCreateWithoutSubscriptionInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutSubscriptionInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutSubscriptionInput, PaymentUncheckedUpdateWithoutSubscriptionInput>
  }

  export type PaymentUpdateManyWithWhereWithoutSubscriptionInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutSubscriptionInput>
  }

  export type UserUpsertWithoutSubscriptionInput = {
    update: XOR<UserUpdateWithoutSubscriptionInput, UserUncheckedUpdateWithoutSubscriptionInput>
    create: XOR<UserCreateWithoutSubscriptionInput, UserUncheckedCreateWithoutSubscriptionInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSubscriptionInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSubscriptionInput, UserUncheckedUpdateWithoutSubscriptionInput>
  }

  export type UserUpdateWithoutSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    currentLocation?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    interests?: UserUpdateinterestsInput | string[]
    visitedCountries?: UserUpdatevisitedCountriesInput | string[]
    verifiedBadge?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdTravelPlans?: UserUpdatecreatedTravelPlansInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    travelPlans?: TravelPlanUpdateManyWithoutUserNestedInput
    joinRequests?: TravelPlanJoinRequestUpdateManyWithoutRequesterNestedInput
    participants?: TravelPlanParticipantUpdateManyWithoutUserNestedInput
    givenReviews?: ReviewUpdateManyWithoutReviewerNestedInput
    receivedReviews?: ReviewUpdateManyWithoutTargetUserNestedInput
    payments?: PaymentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    currentLocation?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    interests?: UserUpdateinterestsInput | string[]
    visitedCountries?: UserUpdatevisitedCountriesInput | string[]
    verifiedBadge?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdTravelPlans?: UserUpdatecreatedTravelPlansInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    travelPlans?: TravelPlanUncheckedUpdateManyWithoutUserNestedInput
    joinRequests?: TravelPlanJoinRequestUncheckedUpdateManyWithoutRequesterNestedInput
    participants?: TravelPlanParticipantUncheckedUpdateManyWithoutUserNestedInput
    givenReviews?: ReviewUncheckedUpdateManyWithoutReviewerNestedInput
    receivedReviews?: ReviewUncheckedUpdateManyWithoutTargetUserNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TravelPlanCreateManyUserInput = {
    id?: string
    destination: string
    startDate: Date | string
    endDate: Date | string
    budgetRange?: string | null
    travelType: $Enums.TravelType
    description?: string | null
    visibility?: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TravelPlanJoinRequestCreateManyRequesterInput = {
    id?: string
    planId: string
    status?: $Enums.JoinStatus
  }

  export type TravelPlanParticipantCreateManyUserInput = {
    id?: string
    planId: string
    joinedAt?: Date | string
    status?: $Enums.ParticipantStatus
  }

  export type ReviewCreateManyReviewerInput = {
    id?: string
    targetUserId: string
    planId: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type ReviewCreateManyTargetUserInput = {
    id?: string
    reviewerId: string
    planId: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type PaymentCreateManyUserInput = {
    id?: string
    subscriptionId?: number | null
    amount: number
    currency?: string
    stripeInvoiceId: string
    stripePaymentIntent?: string | null
    status?: $Enums.PaymentStatus
    createdAt?: Date | string
  }

  export type TravelPlanUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    budgetRange?: NullableStringFieldUpdateOperationsInput | string | null
    travelType?: EnumTravelTypeFieldUpdateOperationsInput | $Enums.TravelType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    visibility?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participants?: TravelPlanParticipantUpdateManyWithoutPlanNestedInput
    joinRequests?: TravelPlanJoinRequestUpdateManyWithoutPlanNestedInput
    reviews?: ReviewUpdateManyWithoutPlanNestedInput
  }

  export type TravelPlanUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    budgetRange?: NullableStringFieldUpdateOperationsInput | string | null
    travelType?: EnumTravelTypeFieldUpdateOperationsInput | $Enums.TravelType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    visibility?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participants?: TravelPlanParticipantUncheckedUpdateManyWithoutPlanNestedInput
    joinRequests?: TravelPlanJoinRequestUncheckedUpdateManyWithoutPlanNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutPlanNestedInput
  }

  export type TravelPlanUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    budgetRange?: NullableStringFieldUpdateOperationsInput | string | null
    travelType?: EnumTravelTypeFieldUpdateOperationsInput | $Enums.TravelType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    visibility?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TravelPlanJoinRequestUpdateWithoutRequesterInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumJoinStatusFieldUpdateOperationsInput | $Enums.JoinStatus
    plan?: TravelPlanUpdateOneRequiredWithoutJoinRequestsNestedInput
  }

  export type TravelPlanJoinRequestUncheckedUpdateWithoutRequesterInput = {
    id?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    status?: EnumJoinStatusFieldUpdateOperationsInput | $Enums.JoinStatus
  }

  export type TravelPlanJoinRequestUncheckedUpdateManyWithoutRequesterInput = {
    id?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    status?: EnumJoinStatusFieldUpdateOperationsInput | $Enums.JoinStatus
  }

  export type TravelPlanParticipantUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumParticipantStatusFieldUpdateOperationsInput | $Enums.ParticipantStatus
    plan?: TravelPlanUpdateOneRequiredWithoutParticipantsNestedInput
  }

  export type TravelPlanParticipantUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumParticipantStatusFieldUpdateOperationsInput | $Enums.ParticipantStatus
  }

  export type TravelPlanParticipantUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumParticipantStatusFieldUpdateOperationsInput | $Enums.ParticipantStatus
  }

  export type ReviewUpdateWithoutReviewerInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    targetUser?: UserUpdateOneRequiredWithoutReceivedReviewsNestedInput
    plan?: TravelPlanUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateWithoutReviewerInput = {
    id?: StringFieldUpdateOperationsInput | string
    targetUserId?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyWithoutReviewerInput = {
    id?: StringFieldUpdateOperationsInput | string
    targetUserId?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUpdateWithoutTargetUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewer?: UserUpdateOneRequiredWithoutGivenReviewsNestedInput
    plan?: TravelPlanUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateWithoutTargetUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    reviewerId?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyWithoutTargetUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    reviewerId?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    stripeInvoiceId?: StringFieldUpdateOperationsInput | string
    stripePaymentIntent?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscription?: SubscriptionUpdateOneWithoutPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    subscriptionId?: NullableIntFieldUpdateOperationsInput | number | null
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    stripeInvoiceId?: StringFieldUpdateOperationsInput | string
    stripePaymentIntent?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    subscriptionId?: NullableIntFieldUpdateOperationsInput | number | null
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    stripeInvoiceId?: StringFieldUpdateOperationsInput | string
    stripePaymentIntent?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TravelPlanParticipantCreateManyPlanInput = {
    id?: string
    userId: string
    joinedAt?: Date | string
    status?: $Enums.ParticipantStatus
  }

  export type TravelPlanJoinRequestCreateManyPlanInput = {
    id?: string
    requesterId: string
    status?: $Enums.JoinStatus
  }

  export type ReviewCreateManyPlanInput = {
    id?: string
    reviewerId: string
    targetUserId: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type TravelPlanParticipantUpdateWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumParticipantStatusFieldUpdateOperationsInput | $Enums.ParticipantStatus
    user?: UserUpdateOneRequiredWithoutParticipantsNestedInput
  }

  export type TravelPlanParticipantUncheckedUpdateWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumParticipantStatusFieldUpdateOperationsInput | $Enums.ParticipantStatus
  }

  export type TravelPlanParticipantUncheckedUpdateManyWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumParticipantStatusFieldUpdateOperationsInput | $Enums.ParticipantStatus
  }

  export type TravelPlanJoinRequestUpdateWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumJoinStatusFieldUpdateOperationsInput | $Enums.JoinStatus
    requester?: UserUpdateOneRequiredWithoutJoinRequestsNestedInput
  }

  export type TravelPlanJoinRequestUncheckedUpdateWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    requesterId?: StringFieldUpdateOperationsInput | string
    status?: EnumJoinStatusFieldUpdateOperationsInput | $Enums.JoinStatus
  }

  export type TravelPlanJoinRequestUncheckedUpdateManyWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    requesterId?: StringFieldUpdateOperationsInput | string
    status?: EnumJoinStatusFieldUpdateOperationsInput | $Enums.JoinStatus
  }

  export type ReviewUpdateWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewer?: UserUpdateOneRequiredWithoutGivenReviewsNestedInput
    targetUser?: UserUpdateOneRequiredWithoutReceivedReviewsNestedInput
  }

  export type ReviewUncheckedUpdateWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    reviewerId?: StringFieldUpdateOperationsInput | string
    targetUserId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    reviewerId?: StringFieldUpdateOperationsInput | string
    targetUserId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateManySubscriptionInput = {
    id?: string
    userId: string
    amount: number
    currency?: string
    stripeInvoiceId: string
    stripePaymentIntent?: string | null
    status?: $Enums.PaymentStatus
    createdAt?: Date | string
  }

  export type PaymentUpdateWithoutSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    stripeInvoiceId?: StringFieldUpdateOperationsInput | string
    stripePaymentIntent?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateWithoutSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    stripeInvoiceId?: StringFieldUpdateOperationsInput | string
    stripePaymentIntent?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyWithoutSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    stripeInvoiceId?: StringFieldUpdateOperationsInput | string
    stripePaymentIntent?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}