/**
 * 获取一个全局唯一标识
 * @param prefix 自定义前缀
 */
export declare function uniqueId(prefix?: string): string;

declare module './ctor' {
  interface XEUtilsMethods {
    /**
     * 获取一个全局唯一标识
     * @param prefix 自定义前缀
     */
    uniqueId: typeof uniqueId;
  }
}

export default uniqueId
