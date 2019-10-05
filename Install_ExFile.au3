#cs ----------------------------------------------------------------------------

 Install:
 - FontAwesome
 - Font SegoeUI


#ce ----------------------------------------------------------------------------
#include <WinAPIGdi.au3>
#include <APIGdiConstants.au3>

_WinAPI_AddFontResourceEx(@ScriptDir &"\font\segoeui.ttf",$FR_PRIVATE)
_WinAPI_AddFontResourceEx(@ScriptDir & "\font\fontawesome.ttf",$FR_PRIVATE)
