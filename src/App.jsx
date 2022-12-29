import React from "react"
import ToggleCustomHock from "./ToggleHock/ToggleCustomHock"
import "../src/index.css"
import Timeoutcomponent from "./useTimeoutHook/Timeoutcomponenet"
import RebondComponent from "./useRebondHook/RebondComponent"
import UpdateEffectComponent from "./UpdateEffectHook/UpdateEffectComponent"
import ArrayHookComponent from "./ArrayHook/ArrayHookComponent"
import PreviousComponent from "./PreviousHook/PreviousComponent"
import StateWithHistoryComponent from "./StateWithHistoryHook/StateWithHistoryComponent"
import UseStorageComponent from "./useStorageHook/UseStorageComponent"

export default function App() {
  return (
    <>
      {/* <ToggleCustomHock />
      <Timeoutcomponent />
      <RebondComponent />
      <UpdateEffectComponent />
      <ArrayHookComponent /> */}
      {/* <PreviousComponent/> */}
      {/* <StateWithHistoryComponent/> */}
      <UseStorageComponent/>
    </>
  )
}
