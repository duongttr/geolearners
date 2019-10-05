#include <DateTimeConstants.au3>
#include <GUIConstantsEx.au3>
#include <StaticConstants.au3>
#include <WindowsConstants.au3>
#Region ### START Koda GUI section ### Form=

Func _CreateGDPGUI()
$gdp_width = 270
$gdp_height = 220
Global $GUI_datePicker = GUICreate("CHỌN NGÀY", $gdp_width, $gdp_height,(@DesktopWidth - $gdp_width) / 2, (@DesktopHeight - $gdp_height) / 2 ,$WS_POPUP,$WS_EX_TOPMOST)
GUISetBkColor(0x63ff9d,$GUI_datePicker)

Global $gdp_datePicker = GUICtrlCreateDate(-1, ($gdp_width - 170) / 2, 88, 170, 38, $DTS_RIGHTALIGN)
GUICtrlSendMsg($gdp_datePicker,$DTM_SETFORMATW, 0, "dd/MM/yyyy")
GUICtrlSetFont(-1, 16, 400, 0, "Segoe UI")
Global $gdp_btn_accept = GUICtrlCreateLabel("ENTER", ($gdp_width - 64) / 2, 152, 64, 34,BitOR($SS_CENTER,$SS_CENTERIMAGE))
GUICtrlSetFont(-1, 12, 400, 0, "Segoe UI")
GUICtrlSetBkColor(-1,0x2d58f0)
GUICtrlSetColor(-1,0xffffff)
GUICtrlSetCursor(-1,0)

GUICtrlCreateLabel("CHỌN NGÀY", 0, 0, 268, 33, BitOR($SS_CENTER,$SS_CENTERIMAGE),$GUI_WS_EX_PARENTDRAG)
GUICtrlSetFont(-1, 15, 700, 0, "Segoe UI")
GUICtrlSetBkColor(-1,0x42d679)
GUICtrlSetColor(-1,0xffffff)

EndFunc
#EndRegion ### END Koda GUI section ###

Func _ShowGdPGUI()
		GUISetState(@SW_SHOW,$GUI_datePicker)
		While 1
			$imsg = GUIGetMsg()
			Switch $imsg
				Case $gdp_btn_accept
					Local $date = GUICtrlRead($gdp_datePicker)
			        HTML_EvalJS('document.getElementById("'&'datepicker_input'&'").value='&'"'&$date&'"')
					HTML_EvalJS('TakeTime()')
					GUISetState(@SW_HIDE,$GUI_datePicker)
					ExitLoop
			EndSwitch
		WEnd
EndFunc

