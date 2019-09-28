const isNotNull = <T>(value: T | null | undefined | void): value is T =>
  value != null;

export default isNotNull;
