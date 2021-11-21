initSidebarItems({"constant":[["MAJOR_VERSION","The major version of the `Input` extension."],["MINOR_VERSION","The minor version of the `Input` extension."],["VERSION_STRING","The version string of the `Input` extension."],["XNAME","The official identifier for the `Input` extension."]],"enum":[["ChangeDevice",""],["ChangeDevicePropertyItems",""],["ChangeMode",""],["ChangeReason",""],["Device",""],["DeviceChange",""],["DeviceClassData",""],["DeviceClassType",""],["DeviceControl",""],["DeviceCtlData",""],["DeviceInputMode",""],["DeviceStateData",""],["DeviceType",""],["DeviceUse",""],["Error","Unified error type for the Input extension"],["Event","Unified event type for the Input extension"],["EventForSend",""],["EventMode",""],["FeedbackClass",""],["FeedbackCtlData",""],["FeedbackStateData",""],["GetDevicePropertyReplyItems",""],["GrabMode22",""],["GrabOwner",""],["GrabType",""],["HierarchyChangeData",""],["HierarchyChangeType",""],["InputClass",""],["InputInfoInfo",""],["InputStateData",""],["ModifierDevice",""],["NotifyDetail",""],["NotifyMode",""],["PropagateMode",""],["PropertyFlag",""],["PropertyFormat",""],["ScrollType",""],["TouchMode",""],["TouchOwnershipFlags",""],["ValuatorMode",""],["XiChangePropertyItems",""],["XiGetPropertyReplyItems",""]],"fn":[["get_extension_data","Fetch server runtime info data of the `Input` extension."],["prefetch_extension_data","Prefetch server runtime info data of the `Input` extension."]],"struct":[["AddMaster",""],["AddMasterBuf",""],["AddMasterIterator",""],["AllowDeviceEvents","The `AllowDeviceEvents` request."],["AttachSlave",""],["AxisInfo",""],["BarrierFlags",""],["BarrierHitEvent","The `BarrierHitEvent` event."],["BarrierReleasePointerInfo",""],["BellFeedbackCtl",""],["BellFeedbackState",""],["ButtonClass",""],["ButtonClassBuf",""],["ButtonClassIterator",""],["ButtonInfo",""],["ButtonPressEvent","The `ButtonPressEvent` event."],["ButtonState",""],["ChangeDeviceControl","The `ChangeDeviceControl` request."],["ChangeDeviceControlCookie","Cookie type for [ChangeDeviceControl]."],["ChangeDeviceControlReply","Reply type for [ChangeDeviceControl]."],["ChangeDeviceDontPropagateList","The `ChangeDeviceDontPropagateList` request."],["ChangeDeviceKeyMapping","The `ChangeDeviceKeyMapping` request."],["ChangeDeviceNotifyEvent","The `ChangeDeviceNotifyEvent` event."],["ChangeDeviceProperty","The `ChangeDeviceProperty` request."],["ChangeDevicePropertyItemsParams",""],["ChangeFeedbackControl","The `ChangeFeedbackControl` request."],["ChangeFeedbackControlMask",""],["ChangeKeyboardDevice","The `ChangeKeyboardDevice` request."],["ChangeKeyboardDeviceCookie","Cookie type for [ChangeKeyboardDevice]."],["ChangeKeyboardDeviceReply","Reply type for [ChangeKeyboardDevice]."],["ChangePointerDevice","The `ChangePointerDevice` request."],["ChangePointerDeviceCookie","Cookie type for [ChangePointerDevice]."],["ChangePointerDeviceReply","Reply type for [ChangePointerDevice]."],["ClassError","The `ClassError` error."],["ClassesReportedMask",""],["CloseDevice","The `CloseDevice` request."],["DeleteDeviceProperty","The `DeleteDeviceProperty` request."],["DetachSlave",""],["DeviceAbsAreaCtrl",""],["DeviceAbsAreaState",""],["DeviceAbsCalibCtl",""],["DeviceAbsCalibState",""],["DeviceBell","The `DeviceBell` request."],["DeviceBusyError","The `DeviceBusyError` error."],["DeviceButtonStateNotifyEvent","The `DeviceButtonStateNotifyEvent` event."],["DeviceChangedEvent","The `DeviceChangedEvent` event."],["DeviceClass",""],["DeviceClassBuf",""],["DeviceClassDataParams",""],["DeviceClassIterator",""],["DeviceCoreCtrl",""],["DeviceCoreState",""],["DeviceCtl",""],["DeviceCtlBuf",""],["DeviceCtlDataParams",""],["DeviceCtlIterator",""],["DeviceEnableCtrl",""],["DeviceEnableState",""],["DeviceError","The `DeviceError` error."],["DeviceFocusInEvent","The `DeviceFocusInEvent` event."],["DeviceInfo",""],["DeviceKeyPressEvent","The `DeviceKeyPressEvent` event."],["DeviceKeyStateNotifyEvent","The `DeviceKeyStateNotifyEvent` event."],["DeviceMappingNotifyEvent","The `DeviceMappingNotifyEvent` event."],["DeviceName",""],["DeviceNameBuf",""],["DeviceNameIterator",""],["DevicePresenceNotifyEvent","The `DevicePresenceNotifyEvent` event."],["DevicePropertyNotifyEvent","The `DevicePropertyNotifyEvent` event."],["DeviceResolutionCtl",""],["DeviceResolutionCtlBuf",""],["DeviceResolutionCtlIterator",""],["DeviceResolutionState",""],["DeviceResolutionStateBuf",""],["DeviceResolutionStateIterator",""],["DeviceState",""],["DeviceStateBuf",""],["DeviceStateDataParams",""],["DeviceStateIterator",""],["DeviceStateNotifyEvent","The `DeviceStateNotifyEvent` event."],["DeviceTimeCoord",""],["DeviceTimeCoordBuf",""],["DeviceTimeCoordIterator",""],["DeviceTimeCoordParams",""],["DeviceValuatorEvent","The `DeviceValuatorEvent` event."],["EnterEvent","The `EnterEvent` event."],["EventError","The `EventError` error."],["EventMask",""],["EventMaskBuf",""],["EventMaskIterator",""],["FeedbackCtl",""],["FeedbackCtlBuf",""],["FeedbackCtlDataParams",""],["FeedbackCtlIterator",""],["FeedbackState",""],["FeedbackStateBuf",""],["FeedbackStateDataParams",""],["FeedbackStateIterator",""],["Fp3232",""],["GetDeviceButtonMapping","The `GetDeviceButtonMapping` request."],["GetDeviceButtonMappingCookie","Cookie type for [GetDeviceButtonMapping]."],["GetDeviceButtonMappingReply","Reply type for [GetDeviceButtonMapping]."],["GetDeviceControl","The `GetDeviceControl` request."],["GetDeviceControlCookie","Cookie type for [GetDeviceControl]."],["GetDeviceControlReply","Reply type for [GetDeviceControl]."],["GetDeviceDontPropagateList","The `GetDeviceDontPropagateList` request."],["GetDeviceDontPropagateListCookie","Cookie type for [GetDeviceDontPropagateList]."],["GetDeviceDontPropagateListReply","Reply type for [GetDeviceDontPropagateList]."],["GetDeviceFocus","The `GetDeviceFocus` request."],["GetDeviceFocusCookie","Cookie type for [GetDeviceFocus]."],["GetDeviceFocusReply","Reply type for [GetDeviceFocus]."],["GetDeviceKeyMapping","The `GetDeviceKeyMapping` request."],["GetDeviceKeyMappingCookie","Cookie type for [GetDeviceKeyMapping]."],["GetDeviceKeyMappingReply","Reply type for [GetDeviceKeyMapping]."],["GetDeviceModifierMapping","The `GetDeviceModifierMapping` request."],["GetDeviceModifierMappingCookie","Cookie type for [GetDeviceModifierMapping]."],["GetDeviceModifierMappingReply","Reply type for [GetDeviceModifierMapping]."],["GetDeviceMotionEvents","The `GetDeviceMotionEvents` request."],["GetDeviceMotionEventsCookie","Cookie type for [GetDeviceMotionEvents]."],["GetDeviceMotionEventsReply","Reply type for [GetDeviceMotionEvents]."],["GetDeviceProperty","The `GetDeviceProperty` request."],["GetDevicePropertyCookie","Cookie type for [GetDeviceProperty]."],["GetDevicePropertyReply","Reply type for [GetDeviceProperty]."],["GetDevicePropertyReplyItemsParams",""],["GetExtensionVersion","The `GetExtensionVersion` request."],["GetExtensionVersionCookie","Cookie type for [GetExtensionVersion]."],["GetExtensionVersionReply","Reply type for [GetExtensionVersion]."],["GetFeedbackControl","The `GetFeedbackControl` request."],["GetFeedbackControlCookie","Cookie type for [GetFeedbackControl]."],["GetFeedbackControlReply","Reply type for [GetFeedbackControl]."],["GetSelectedExtensionEvents","The `GetSelectedExtensionEvents` request."],["GetSelectedExtensionEventsCookie","Cookie type for [GetSelectedExtensionEvents]."],["GetSelectedExtensionEventsReply","Reply type for [GetSelectedExtensionEvents]."],["GrabDevice","The `GrabDevice` request."],["GrabDeviceButton","The `GrabDeviceButton` request."],["GrabDeviceCookie","Cookie type for [GrabDevice]."],["GrabDeviceKey","The `GrabDeviceKey` request."],["GrabDeviceReply","Reply type for [GrabDevice]."],["GrabModifierInfo",""],["GroupInfo",""],["HierarchyChange",""],["HierarchyChangeBuf",""],["HierarchyChangeDataParams",""],["HierarchyChangeIterator",""],["HierarchyEvent","The `HierarchyEvent` event."],["HierarchyInfo",""],["HierarchyMask",""],["InputClassInfo",""],["InputInfo",""],["InputInfoBuf",""],["InputInfoInfoParams",""],["InputInfoIterator",""],["InputState",""],["InputStateBuf",""],["InputStateDataParams",""],["InputStateIterator",""],["IntegerFeedbackCtl",""],["IntegerFeedbackState",""],["KbdFeedbackCtl",""],["KbdFeedbackState",""],["KeyClass",""],["KeyClassBuf",""],["KeyClassIterator",""],["KeyEventFlags",""],["KeyInfo",""],["KeyPressEvent","The `KeyPressEvent` event."],["KeyState",""],["LedFeedbackCtl",""],["LedFeedbackState",""],["ListDeviceProperties","The `ListDeviceProperties` request."],["ListDevicePropertiesCookie","Cookie type for [ListDeviceProperties]."],["ListDevicePropertiesReply","Reply type for [ListDeviceProperties]."],["ListInputDevices","The `ListInputDevices` request."],["ListInputDevicesCookie","Cookie type for [ListInputDevices]."],["ListInputDevicesReply","Reply type for [ListInputDevices]."],["ModeError","The `ModeError` error."],["ModifierInfo",""],["ModifierMask",""],["MoreEventsMask",""],["OpenDevice","The `OpenDevice` request."],["OpenDeviceCookie","Cookie type for [OpenDevice]."],["OpenDeviceReply","Reply type for [OpenDevice]."],["PointerEventFlags",""],["PropertyEvent","The `PropertyEvent` event."],["PtrFeedbackCtl",""],["PtrFeedbackState",""],["QueryDeviceState","The `QueryDeviceState` request."],["QueryDeviceStateCookie","Cookie type for [QueryDeviceState]."],["QueryDeviceStateReply","Reply type for [QueryDeviceState]."],["RawButtonPressEvent","The `RawButtonPressEvent` event."],["RawKeyPressEvent","The `RawKeyPressEvent` event."],["RawTouchBeginEvent","The `RawTouchBeginEvent` event."],["RemoveMaster",""],["ScrollClass",""],["ScrollFlags",""],["SelectExtensionEvent","The `SelectExtensionEvent` request."],["SendExtensionEvent","The `SendExtensionEvent` request."],["SetDeviceButtonMapping","The `SetDeviceButtonMapping` request."],["SetDeviceButtonMappingCookie","Cookie type for [SetDeviceButtonMapping]."],["SetDeviceButtonMappingReply","Reply type for [SetDeviceButtonMapping]."],["SetDeviceFocus","The `SetDeviceFocus` request."],["SetDeviceMode","The `SetDeviceMode` request."],["SetDeviceModeCookie","Cookie type for [SetDeviceMode]."],["SetDeviceModeReply","Reply type for [SetDeviceMode]."],["SetDeviceModifierMapping","The `SetDeviceModifierMapping` request."],["SetDeviceModifierMappingCookie","Cookie type for [SetDeviceModifierMapping]."],["SetDeviceModifierMappingReply","Reply type for [SetDeviceModifierMapping]."],["SetDeviceValuators","The `SetDeviceValuators` request."],["SetDeviceValuatorsCookie","Cookie type for [SetDeviceValuators]."],["SetDeviceValuatorsReply","Reply type for [SetDeviceValuators]."],["StringFeedbackCtl",""],["StringFeedbackCtlBuf",""],["StringFeedbackCtlIterator",""],["StringFeedbackState",""],["StringFeedbackStateBuf",""],["StringFeedbackStateIterator",""],["TouchBeginEvent","The `TouchBeginEvent` event."],["TouchClass",""],["TouchEventFlags",""],["TouchOwnershipEvent","The `TouchOwnershipEvent` event."],["UncheckedChangeDeviceControlCookie","Unchecked cookie type for [ChangeDeviceControl]."],["UncheckedChangeKeyboardDeviceCookie","Unchecked cookie type for [ChangeKeyboardDevice]."],["UncheckedChangePointerDeviceCookie","Unchecked cookie type for [ChangePointerDevice]."],["UncheckedGetDeviceButtonMappingCookie","Unchecked cookie type for [GetDeviceButtonMapping]."],["UncheckedGetDeviceControlCookie","Unchecked cookie type for [GetDeviceControl]."],["UncheckedGetDeviceDontPropagateListCookie","Unchecked cookie type for [GetDeviceDontPropagateList]."],["UncheckedGetDeviceFocusCookie","Unchecked cookie type for [GetDeviceFocus]."],["UncheckedGetDeviceKeyMappingCookie","Unchecked cookie type for [GetDeviceKeyMapping]."],["UncheckedGetDeviceModifierMappingCookie","Unchecked cookie type for [GetDeviceModifierMapping]."],["UncheckedGetDeviceMotionEventsCookie","Unchecked cookie type for [GetDeviceMotionEvents]."],["UncheckedGetDevicePropertyCookie","Unchecked cookie type for [GetDeviceProperty]."],["UncheckedGetExtensionVersionCookie","Unchecked cookie type for [GetExtensionVersion]."],["UncheckedGetFeedbackControlCookie","Unchecked cookie type for [GetFeedbackControl]."],["UncheckedGetSelectedExtensionEventsCookie","Unchecked cookie type for [GetSelectedExtensionEvents]."],["UncheckedGrabDeviceCookie","Unchecked cookie type for [GrabDevice]."],["UncheckedListDevicePropertiesCookie","Unchecked cookie type for [ListDeviceProperties]."],["UncheckedListInputDevicesCookie","Unchecked cookie type for [ListInputDevices]."],["UncheckedOpenDeviceCookie","Unchecked cookie type for [OpenDevice]."],["UncheckedQueryDeviceStateCookie","Unchecked cookie type for [QueryDeviceState]."],["UncheckedSetDeviceButtonMappingCookie","Unchecked cookie type for [SetDeviceButtonMapping]."],["UncheckedSetDeviceModeCookie","Unchecked cookie type for [SetDeviceMode]."],["UncheckedSetDeviceModifierMappingCookie","Unchecked cookie type for [SetDeviceModifierMapping]."],["UncheckedSetDeviceValuatorsCookie","Unchecked cookie type for [SetDeviceValuators]."],["UncheckedXiGetClientPointerCookie","Unchecked cookie type for [XiGetClientPointer]."],["UncheckedXiGetFocusCookie","Unchecked cookie type for [XiGetFocus]."],["UncheckedXiGetPropertyCookie","Unchecked cookie type for [XiGetProperty]."],["UncheckedXiGetSelectedEventsCookie","Unchecked cookie type for [XiGetSelectedEvents]."],["UncheckedXiGrabDeviceCookie","Unchecked cookie type for [XiGrabDevice]."],["UncheckedXiListPropertiesCookie","Unchecked cookie type for [XiListProperties]."],["UncheckedXiPassiveGrabDeviceCookie","Unchecked cookie type for [XiPassiveGrabDevice]."],["UncheckedXiQueryDeviceCookie","Unchecked cookie type for [XiQueryDevice]."],["UncheckedXiQueryPointerCookie","Unchecked cookie type for [XiQueryPointer]."],["UncheckedXiQueryVersionCookie","Unchecked cookie type for [XiQueryVersion]."],["UngrabDevice","The `UngrabDevice` request."],["UngrabDeviceButton","The `UngrabDeviceButton` request."],["UngrabDeviceKey","The `UngrabDeviceKey` request."],["ValuatorClass",""],["ValuatorInfo",""],["ValuatorInfoBuf",""],["ValuatorInfoIterator",""],["ValuatorState",""],["ValuatorStateBuf",""],["ValuatorStateIterator",""],["ValuatorStateModeMask",""],["XiAllowEvents","The `XiAllowEvents` request."],["XiBarrierReleasePointer","The `XiBarrierReleasePointer` request."],["XiChangeCursor","The `XiChangeCursor` request."],["XiChangeHierarchy","The `XiChangeHierarchy` request."],["XiChangeProperty","The `XiChangeProperty` request."],["XiChangePropertyItemsParams",""],["XiDeleteProperty","The `XiDeleteProperty` request."],["XiDeviceInfo",""],["XiDeviceInfoBuf",""],["XiDeviceInfoIterator",""],["XiEventMask",""],["XiGetClientPointer","The `XiGetClientPointer` request."],["XiGetClientPointerCookie","Cookie type for [XiGetClientPointer]."],["XiGetClientPointerReply","Reply type for [XiGetClientPointer]."],["XiGetFocus","The `XiGetFocus` request."],["XiGetFocusCookie","Cookie type for [XiGetFocus]."],["XiGetFocusReply","Reply type for [XiGetFocus]."],["XiGetProperty","The `XiGetProperty` request."],["XiGetPropertyCookie","Cookie type for [XiGetProperty]."],["XiGetPropertyReply","Reply type for [XiGetProperty]."],["XiGetPropertyReplyItemsParams",""],["XiGetSelectedEvents","The `XiGetSelectedEvents` request."],["XiGetSelectedEventsCookie","Cookie type for [XiGetSelectedEvents]."],["XiGetSelectedEventsReply","Reply type for [XiGetSelectedEvents]."],["XiGrabDevice","The `XiGrabDevice` request."],["XiGrabDeviceCookie","Cookie type for [XiGrabDevice]."],["XiGrabDeviceReply","Reply type for [XiGrabDevice]."],["XiListProperties","The `XiListProperties` request."],["XiListPropertiesCookie","Cookie type for [XiListProperties]."],["XiListPropertiesReply","Reply type for [XiListProperties]."],["XiPassiveGrabDevice","The `XiPassiveGrabDevice` request."],["XiPassiveGrabDeviceCookie","Cookie type for [XiPassiveGrabDevice]."],["XiPassiveGrabDeviceReply","Reply type for [XiPassiveGrabDevice]."],["XiPassiveUngrabDevice","The `XiPassiveUngrabDevice` request."],["XiQueryDevice","The `XiQueryDevice` request."],["XiQueryDeviceCookie","Cookie type for [XiQueryDevice]."],["XiQueryDeviceReply","Reply type for [XiQueryDevice]."],["XiQueryPointer","The `XiQueryPointer` request."],["XiQueryPointerCookie","Cookie type for [XiQueryPointer]."],["XiQueryPointerReply","Reply type for [XiQueryPointer]."],["XiQueryVersion","The `XiQueryVersion` request."],["XiQueryVersionCookie","Cookie type for [XiQueryVersion]."],["XiQueryVersionReply","Reply type for [XiQueryVersion]."],["XiSelectEvents","The `XiSelectEvents` request."],["XiSetClientPointer","The `XiSetClientPointer` request."],["XiSetFocus","The `XiSetFocus` request."],["XiUngrabDevice","The `XiUngrabDevice` request."],["XiWarpPointer","The `XiWarpPointer` request."]],"type":[["BarrierLeaveEvent","The `BarrierLeaveEvent` event."],["ButtonReleaseEvent","The `ButtonReleaseEvent` event."],["DeviceButtonPressEvent","The `DeviceButtonPressEvent` event."],["DeviceButtonReleaseEvent","The `DeviceButtonReleaseEvent` event."],["DeviceFocusOutEvent","The `DeviceFocusOutEvent` event."],["DeviceId",""],["DeviceKeyReleaseEvent","The `DeviceKeyReleaseEvent` event."],["DeviceMotionNotifyEvent","The `DeviceMotionNotifyEvent` event."],["EventClass",""],["EventTypeBase",""],["FocusInEvent","The `FocusInEvent` event."],["FocusOutEvent","The `FocusOutEvent` event."],["Fp1616",""],["KeyCode",""],["KeyReleaseEvent","The `KeyReleaseEvent` event."],["LeaveEvent","The `LeaveEvent` event."],["MotionEvent","The `MotionEvent` event."],["ProximityInEvent","The `ProximityInEvent` event."],["ProximityOutEvent","The `ProximityOutEvent` event."],["RawButtonReleaseEvent","The `RawButtonReleaseEvent` event."],["RawKeyReleaseEvent","The `RawKeyReleaseEvent` event."],["RawMotionEvent","The `RawMotionEvent` event."],["RawTouchEndEvent","The `RawTouchEndEvent` event."],["RawTouchUpdateEvent","The `RawTouchUpdateEvent` event."],["TouchEndEvent","The `TouchEndEvent` event."],["TouchUpdateEvent","The `TouchUpdateEvent` event."]]});