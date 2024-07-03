import { OnChangeFn, Updater } from '../../types'
import { ColumnPinningPosition } from '../column-pinning/ColumnPinning.types'

export interface ColumnSizingTableState {
  columnSizing: ColumnSizingState
}

export type ColumnSizingState = Record<string, number>

export interface ColumnSizingOptions {
  /**
   * If provided, this function will be called with an `updaterFn` when `state.columnSizing` changes. This overrides the default internal state management, so you will also need to supply `state.columnSizing` from your own managed state.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/column-sizing#oncolumnsizingchange)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/column-sizing)
   */
  onColumnSizingChange?: OnChangeFn<ColumnSizingState>
}

export type ColumnSizingDefaultOptions = Pick<
  ColumnSizingOptions,
  'onColumnSizingChange'
>

export interface ColumnSizingInstance {
  /**
   * If pinning, returns the total size of the center portion of the table by calculating the sum of the sizes of all unpinned/center leaf-columns.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/column-sizing#getcentertotalsize)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/column-sizing)
   */
  getCenterTotalSize: () => number
  /**`
   * Returns the total size of the left portion of the table by calculating the sum of the sizes of all left leaf-columns.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/column-sizing#getlefttotalsize)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/column-sizing)
   */
  getLeftTotalSize: () => number
  /**
   * Returns the total size of the right portion of the table by calculating the sum of the sizes of all right leaf-columns.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/column-sizing#getrighttotalsize)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/column-sizing)
   */
  getRightTotalSize: () => number
  /**
   * Returns the total size of the table by calculating the sum of the sizes of all leaf-columns.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/column-sizing#gettotalsize)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/column-sizing)
   */
  getTotalSize: () => number
  /**
   * Resets column sizing to its initial state. If `defaultState` is `true`, the default state for the table will be used instead of the initialValue provided to the table.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/column-sizing#resetcolumnsizing)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/column-sizing)
   */
  resetColumnSizing: (defaultState?: boolean) => void
  /**
   * Sets the column sizing state using an updater function or a value. This will trigger the underlying `onColumnSizingChange` function if one is passed to the table options, otherwise the state will be managed automatically by the table.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/column-sizing#setcolumnsizing)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/column-sizing)
   */
  setColumnSizing: (updater: Updater<ColumnSizingState>) => void
}

export interface ColumnSizingColumnDef {
  /**
   * The maximum allowed size for the column
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/column-sizing#maxsize)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/column-sizing)
   */
  maxSize?: number
  /**
   * The minimum allowed size for the column
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/column-sizing#minsize)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/column-sizing)
   */
  minSize?: number
  /**
   * The desired size for the column
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/column-sizing#size)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/column-sizing)
   */
  size?: number
}

export interface ColumnSizingColumn {
  /**
   * Returns the offset measurement along the row-axis (usually the x-axis for standard tables) for the header. This is effectively a sum of the offset measurements of all succeeding (right) headers in relation to the current column.
   */
  getAfter: (position?: ColumnPinningPosition | 'center') => number
  /**
   * Returns the current size of the column.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/column-sizing#getsize)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/column-sizing)
   */
  getSize: () => number
  /**
   * Returns the offset measurement along the row-axis (usually the x-axis for standard tables) for the header. This is effectively a sum of the offset measurements of all preceding (left) headers in relation to the current column.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/column-sizing#getstart)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/column-sizing)
   */
  getStart: (position?: ColumnPinningPosition | 'center') => number
  /**
   * Resets the column to its initial size.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/column-sizing#resetsize)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/column-sizing)
   */
  resetSize: () => void
}

export interface ColumnSizingHeader {
  /**
   * Returns the current size of the header.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/column-sizing#getsize)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/column-sizing)
   */
  getSize: () => number
  /**
   * Returns the offset measurement along the row-axis (usually the x-axis for standard tables) for the header. This is effectively a sum of the offset measurements of all preceding headers.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/column-sizing#getstart)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/column-sizing)
   */
  getStart: (position?: ColumnPinningPosition) => number
}
