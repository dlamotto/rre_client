import { atom } from "recoil";
import { recoilPersist } from 'recoil-persist'
//import { useRecoilState } from "recoil";
//const { persistAtom } = recoilPersist()

// TODO: figure out how to use these atoms to update states

/** Page state atom - specifies the current page to route to
 */
export const pageState = atom({
    key: 'pageState',
    default: "dashboard",
    // effects_UNSTABLE: [persistAtom],
});

export const optionsState = atom({
    key: 'optionsState',
    default: (props) =>
    props.options.map((option) => ({
      ...option,
      selected: false
    }))
  });