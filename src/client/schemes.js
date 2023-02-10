/////////////////////
/* struct mapping */
///////////////////

/* extendable assignable class */
class Assignable {
  constructor(properties) {
    Object.keys(properties).map((key) => {
      return (this[key] = properties[key]);
    });
  }
}

/* client account info data structure */
export class ClientAccount extends Assignable {
  /* borsh schema describing the struct fields */
  static schema = new Map([
    [
      this,
      {
        kind: 'struct',
        fields: [
          ['creation', 'i64'],
        ]
      }
    ]
  ]);
}

/* transfer request data structure */
export class TransferRequest extends Assignable {
  /* borsh schema describing the struct fields */
  static schema = new Map([
    [
      this,
      {
        kind: 'struct',
        fields: [
          ['seed', 'string'],
          ['amount', 'u64'],
        ]
      }
    ]
  ]);
}
