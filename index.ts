/**
 * Check wether bisskey code is valid bisskey code or not
 * 
 * @param bisskey {string} bisskey code
 */
export const check = (bisskey: string): boolean => {
  /**
   * Bisskey code is contain 1,2,3,4,5,6,7,8,9,A,B,C,D,E,F
   */
  const bissKeyRe = /^[1-9a-fA-F]{16}$/

  return bissKeyRe.test(bisskey)
}

export default check
