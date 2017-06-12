'use strict'

/**
 * Module Dependencies
 * @ignore
 */
const OperationNotSupportedError = require('../OperationNotSupportedError')

/**
 * KeyType
 * @ignore
 */
class KeyType {

  /**
   * constructor
   *
   * @class KeyType
   *
   * @description
   * Abstract KeyType class
   */
  constructor (data, options={}) {
    Object.assign(this, data)
    Object.keys(options).map(key => {
      Object.defineProperty(this, key, { value: options[key] })
    })
  }

  static formatPem (base64pem, descriptor) {
    return `-----BEGIN ${descriptor} KEY-----\n`
    + base64pem.match(/.{1,64}/g).join('\n')
    + `\n-----END ${descriptor} KEY-----`
  }

  static get kty () {
    throw new OperationNotSupportedError()
  }

  static get oid () {
    throw new OperationNotSupportedError()
  }

  static get parameters () {
    throw new OperationNotSupportedError()
  }

  static fromPKCS8 (base64pem) {
    throw new OperationNotSupportedError()
  }

  static fromPKCS1 (base64pem) {
    throw new OperationNotSupportedError()
  }

  static fromPublicPem (base64pem) {
    throw new OperationNotSupportedError()
  }

  static fromHex (hex, options) {
    throw new OperationNotSupportedError()
  }

  static fromJwk (jwk) {
    throw new OperationNotSupportedError()
  }

  static fromBuffer (buffer, options) {
    throw new OperationNotSupportedError()
  }

  static fromArray (array, options) {
    throw new OperationNotSupportedError()
  }

  get isPrivate () {
    throw new OperationNotSupportedError()
  }

  toPKCS8 () {
    throw new OperationNotSupportedError()
  }

  toPKCS1 () {
    throw new OperationNotSupportedError()
  }

  toPublicPem () {
    throw new OperationNotSupportedError()
  }

  toHex () {
    throw new OperationNotSupportedError()
  }

  toPrivateJwk () {
    throw new OperationNotSupportedError()
  }

  toPublicJwk () {
    throw new OperationNotSupportedError()
  }

  toBuffer () {
    throw new OperationNotSupportedError()
  }

  toArray () {
    throw new OperationNotSupportedError()
  }
}

/**
 * Export
 * @ignore
 */
module.exports = KeyType