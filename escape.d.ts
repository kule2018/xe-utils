/**
 * 转义HTML字符串，替换&, <, >, ", ', \`字符
 * @param str 字符串
 */
export declare function escape(str: string): string;

declare module './ctor' {
  interface XEUtilsMethods {
    /**
     * 转义HTML字符串，替换&, <, >, ", ', \`字符
     * @param str 字符串
     */
    escape: typeof escape;
  }
}

export default escape
