import { atom } from "recoil";
import { recoilPersist } from 'recoil-persist'
const { persistAtom } = recoilPersist()

/** Page state atom - specifies the current page to route to
 */
export const pageState = atom({
    key: 'pageState',
    default: "dashboard",
    effects_UNSTABLE: [persistAtom],
});