import { atom } from 'recoil';
import type { WorkCategoryList } from './types';

// category 상태 관리
const workCategoryListState = atom<WorkCategoryList>({
  key: 'workCategoryListState',
  default: '전체',
});

export default workCategoryListState;
