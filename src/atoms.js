import { atom } from "recoil";
import { recoilPersist } from 'recoil-persist'
//import { useRecoilState } from "recoil";
//const { persistAtom } = recoilPersist()

/** Page state atom - specifies the current page to route to
 */
export const pageState = atom({
    key: 'pageState',
    default: "dashboard",
    // effects_UNSTABLE: [persistAtom],
});

export const optionsState = atom({
    key: 'optionsState',
    default: [
      { id: 1, label: 'Option 1', selected: false },
      { id: 2, label: 'Option 2', selected: false },
      { id: 3, label: 'Option 3', selected: false }
    ]
  });