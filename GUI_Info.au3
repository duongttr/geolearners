;_GUI_Info("Việt Nam",@ScriptDir & "\image\countries_2\laos.png",@ScriptDir & "\image\flag\laos.png",0,0,0,0,0,0,0)
#include <GDIPlus.au3>
Global $pic_map, $pic_flag
;_Create_GuiInfo()
;_SetDataForGUIInfo(@ScriptDir & "\image\countries_2\laos.png",@ScriptDir & "\image\flag\laos.png",0,0,0,0,0,0,0)
Func _Create_GuiInfo()


	#Region ### START Koda GUI section ### Form=
	$Width = 584
	;584 - 245 = 339
	$height = 560
	$info_lb_width = 205
	$info_lb_height = 25

	Global $guiinfo = GUICreate("GuiInfo", $Width, $height, (@DesktopWidth - $Width) / 2, (@DesktopHeight - $height) / 2, $WS_POPUP)
	_Gui_RoundCorners($guiinfo,10,10)
	GUISetBkColor(0xccd4fc)
	GUISetFont(13,400,0,"Segoe UI")




	$pic_map = _GDIPlus_CreatePic("", 5, 80, 240, 240)
	$pic_flag = _GDIPlus_CreatePic("", 180, 272, 68, 68)


	;GUICtrlCreatePic(@ScriptDir & "\bk\bkinfo5.jpg", ($Width - 512) / 2, $height - 200, 512, 512)

	Global $lb_name = GUICtrlCreateLabel("", 0, 0, $Width, 41, BitOR($SS_CENTER, $SS_CENTERIMAGE), $GUI_WS_EX_PARENTDRAG)
	GUICtrlSetBkColor(-1, 0x3F51B5)
	GUICtrlSetColor(-1, 0xffffff)
	GUICtrlSetFont(-1,14,700)


	;GUICtrlCreateLabel("Tên chính thức:", 220, 88, -1, 25, BitOR($SS_CENTER, $SS_CENTERIMAGE))
	;GUICtrlSetColor(-1, 0xffffff)
	;GUICtrlSetFont(-1,13,700,0,"Segoe UI")
	;GUICtrlSetBkColor(-1,$GUI_BKCOLOR_TRANSPARENT)
	;Global $lb_fullname = GUICtrlCreateLabel("", 366, 85, $info_lb_width, 50, $SS_CENTER);
	;GUICtrlSetColor(-1, 0xffffff)
	;GUICtrlSetBkColor(-1,0x0172)
	;GUICtrlSetFont(-1,12,700,0,"Segoe UI")
	;GUICtrlSetBkColor(-1,$GUI_BKCOLOR_TRANSPARENT)

	GUICtrlCreateLabel("Diện tích:", 263, 88, -1, 25, BitOR($SS_CENTER, $SS_CENTERIMAGE))
	GUICtrlSetColor(-1, 0x231f20)
	GUICtrlSetFont(-1,13,700,0,"Segoe UI")
	GUICtrlSetBkColor(-1,$GUI_BKCOLOR_TRANSPARENT)
	Global $lb_square = GUICtrlCreateLabel("", 366, 88, $info_lb_width, $info_lb_height, BitOR($SS_CENTER, $SS_CENTERIMAGE))
	GUICtrlSetColor(-1, 0x231f20)
	GUICtrlSetBkColor(-1,$GUI_BKCOLOR_TRANSPARENT)

	GUICtrlCreateLabel("Dân số:", 263, 128, -1, 25, BitOR($SS_CENTER, $SS_CENTERIMAGE))
	GUICtrlSetColor(-1, 0x231f20)
	GUICtrlSetFont(-1,13,700,0,"Segoe UI")
	GUICtrlSetBkColor(-1,$GUI_BKCOLOR_TRANSPARENT)
	Global $lb_population = GUICtrlCreateLabel("", 366, 128, $info_lb_width, $info_lb_height, BitOR($SS_CENTER, $SS_CENTERIMAGE))
	GUICtrlSetColor(-1, 0x231f20)
	GUICtrlSetBkColor(-1,$GUI_BKCOLOR_TRANSPARENT)

	GUICtrlCreateLabel("Tiền tệ:", 263, 168, -1, 25, BitOR($SS_CENTER, $SS_CENTERIMAGE))
	GUICtrlSetColor(-1, 0x231f20)
	GUICtrlSetFont(-1,13,700,0,"Segoe UI")
	GUICtrlSetBkColor(-1,$GUI_BKCOLOR_TRANSPARENT)
	Global $lb_currency = GUICtrlCreateLabel("", 366, 168, $info_lb_width, $info_lb_height, BitOR($SS_CENTER, $SS_CENTERIMAGE))
	GUICtrlSetColor(-1, 0x231f20)
GUICtrlSetBkColor(-1,$GUI_BKCOLOR_TRANSPARENT)

	GUICtrlCreateLabel("Thủ đô:", 263, 208, -1, 25, BitOR($SS_CENTER, $SS_CENTERIMAGE))
	GUICtrlSetColor(-1, 0x231f20)
	GUICtrlSetFont(-1,13,700,0,"Segoe UI")
	GUICtrlSetBkColor(-1,$GUI_BKCOLOR_TRANSPARENT)
	Global $lb_capital = GUICtrlCreateLabel("", 366, 208, $info_lb_width, $info_lb_height, BitOR($SS_CENTER, $SS_CENTERIMAGE))
	GUICtrlSetColor(-1, 0x231f20)
	GUICtrlSetBkColor(-1,$GUI_BKCOLOR_TRANSPARENT)

	GUICtrlCreateLabel("Múi giờ:", 263, 248, -1, -1, BitOR($SS_CENTER, $SS_CENTERIMAGE))
	GUICtrlSetColor(-1, 0x231f20)
	GUICtrlSetFont(-1,13,700,0,"Segoe UI")
	GUICtrlSetBkColor(-1,$GUI_BKCOLOR_TRANSPARENT)
	Global $lb_timezone = GUICtrlCreateLabel("", 366, 248, $info_lb_width, $info_lb_height, BitOR($SS_CENTER, $SS_CENTERIMAGE))
	GUICtrlSetColor(-1, 0x231f20)
	GUICtrlSetBkColor(-1,$GUI_BKCOLOR_TRANSPARENT)

;GUICtrlCreateLabel(StringUpper("Sự thật thú vị"), 245+100, 300)
;	GUICtrlSetColor(-1, 0x231f20)
;	GUICtrlSetFont(-1,13,700,0,"Segoe UI")
;	GUICtrlSetBkColor(-1,$GUI_BKCOLOR_TRANSPARENT)
;	Global $lb_funfact = GUICtrlCreateLabel("This is fun fact", 263, 350, 266)
;	GUICtrlSetColor(-1, 0x231f20)
;	GUICtrlSetBkColor(-1,$GUI_BKCOLOR_TRANSPARENT)


	Global $btn_close = GUICtrlCreateLabel("Đóng", 248, 490, 90, 33, BitOR($SS_CENTER, $SS_CENTERIMAGE))
	GUICtrlSetBkColor(-1, 0x0172)
	GUICtrlSetColor(-1, 0xffffff)
	GUICtrlSetFont(-1, 14, 400, 0, "Segoe UI",5)
	GUICtrlSetCursor(-1, 0)
EndFunc   ;==>_Create_GuiInfo

Func _SetDataForGUIInfo($dir_picmap, $dir_picflag, $fullname, $square, $population, $currency, $capital, $timezone, $funfact)
	GUICtrlSetData($lb_name,StringUpper($fullname))
	GUICtrlSetData($lb_square,$square)
	GUICtrlDelete($pic_map)
	GUICtrlDelete($pic_flag)
	$pic_map = _GDIPlus_CreatePic($dir_picmap, 5, 80, 220, 220)
	$pic_flag = _GDIPlus_CreatePic($dir_picflag, 180, 272, 100, 100)
	GUICtrlSetData($lb_population,$population)
	GUICtrlSetData($lb_currency,$currency)
	GUICtrlSetData($lb_capital,$capital)
	GUICtrlSetData($lb_timezone,$timezone)
	;GUICtrlSetData($lb_funfact,$funfact)
	WinSetTrans($guiinfo,"",247)
	WinSetOnTop($guiinfo,"",1)

	GUISetState(@SW_SHOW,$guiinfo)


	While 1
		$nMsg = GUIGetMsg()
		Switch $nMsg
			Case $GUI_EVENT_CLOSE, $btn_close
				GUISetState(@SW_HIDE,$guiinfo)
				ExitLoop
		EndSwitch
	WEnd
EndFunc   ;==>_SetDataForGUIInfo



Func _GDIPlus_CreatePic($FileName, $Left, $Top, $Width, $Heigth)
	Local $hPicCtrl, $hImage, $iHeight, $hGDIBitmap
	_GDIPlus_Startup()
	$hImage = _GDIPlus_ImageResize(_GDIPlus_ImageLoadFromFile($FileName), $Width, $Heigth)
	$iWidth = _GDIPlus_ImageGetWidth($hImage)
	$iHeight = _GDIPlus_ImageGetHeight($hImage)
	$hGDIBitmap = _GDIPlus_BitmapCreateHBITMAPFromBitmap($hImage)
	_GDIPlus_ImageDispose($hImage)
	$hPicCtrl = GUICtrlCreatePic('', $Left, $Top, $Width, $Heigth)
	_WinAPI_DeleteObject(GUICtrlSendMsg($hPicCtrl, 0x0172, $IMAGE_BITMAP, $hGDIBitmap)) ;$STM_SETIMAGE = 0x0172
	_WinAPI_DeleteObject($hGDIBitmap)
	_GDIPlus_Shutdown()
	Return $hPicCtrl
EndFunc   ;==>_GDIPlus_CreatePic

Func _GDIPlus_SetPic($FileName)

EndFunc
