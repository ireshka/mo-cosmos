export type SortingState = 'unsorted' | 'sorted-up' | 'sorted-down';

export type SortingButtonProps = {
  sortState: SortingState;
  isVisible: boolean;
};
