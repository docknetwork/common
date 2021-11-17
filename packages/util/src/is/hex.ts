// Copyright 2017-2021 @polkadot/util authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { HexString } from '../types';

export const REGEX_HEX_PREFIXED = /^0x([\da-fA-F]{2})+$/;

export const REGEX_HEX_NOPREFIX = /^([\da-fA-F]{2})+$/;

const REGEX_HEX_PREFIXED_IGNORE = /^0x[\da-fA-F]+$/;

/**
 * @name isHex
 * @summary Tests for a hex string.
 * @description
 * Checks to see if the input value is a `0x` prefixed hex string. Optionally (`bitLength` !== -1) checks to see if the bitLength is correct.
 * @example
 * <BR>
 *
 * ```javascript
 * import { isHex } from '@polkadot/util';
 *
 * isHex('0x1234'); // => true
 * isHex('0x1234', 8); // => false
 * ```
 */
export function isHex (value: unknown, bitLength = -1, ignoreLength = false): value is HexString {
  return (
    typeof value === 'string' && (
      value === '0x' || (
        ignoreLength
          ? REGEX_HEX_PREFIXED_IGNORE.test(value)
          : REGEX_HEX_PREFIXED.test(value)
      )
    )
  )
    ? bitLength === -1
      ? true
      : (value.length === (2 + Math.ceil(bitLength / 4)))
    : false;
}
