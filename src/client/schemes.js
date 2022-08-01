/////////////////////
/* struct mapping */
///////////////////

export class ClientAccount {
  constructor(properties) {
    Object.keys(properties).forEach((key) => {
      this[key] = properties[key];
    });
  }

  static schema = new Map([[this,
                            {
                              kind: 'struct',
                              fields: [
                                ['id', [32]],
                                ['balance', 'u64'],
                              ]
  }]]);
}

export class TransferRequest {
  constructor(properties) {
    Object.keys(properties).forEach((key) => {
      this[key] = properties[key];
    });
  }

  static schema = new Map([[this,
                            {
                              kind: 'struct',
                              fields: [
                                ['amount', 'u64'],
                              ]
  }]]);
}
