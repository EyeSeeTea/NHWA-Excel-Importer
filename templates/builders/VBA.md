### Script to link the Excel checkboxes with data entry fields in VBA

```
    Sub LinkChecks()
        i = 0
        Row = 8
        Dim letters As Variant
        letters = Array("P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "AA")
        For Each cb In ActiveSheet.CheckBoxes
        cb.LinkedCell = Cells(Row, letters(i Mod 12)).Address
        i = i + 1
        If (i Mod 12) = 0 Then Row = Row + 1
        Next cb
    End Sub
 ```

### Script to remove password protection from Excel spreadsheet files in VBA

```
    Sub PasswordRecovery()
        Dim i As Integer, j As Integer, k As Integer
        Dim l As Integer, m As Integer, n As Integer
        Dim i1 As Integer, i2 As Integer, i3 As Integer
        Dim i4 As Integer, i5 As Integer, i6 As Integer
        On Error Resume Next
        For i = 65 To 66: For j = 65 To 66: For k = 65 To 66
        For l = 65 To 66: For m = 65 To 66: For i1 = 65 To 66
        For i2 = 65 To 66: For i3 = 65 To 66: For i4 = 65 To 66
        For i5 = 65 To 66: For i6 = 65 To 66: For n = 32 To 126
        ActiveSheet.Unprotect Chr(i) & Chr(j) & Chr(k) & _
        Chr(l) & Chr(m) & Chr(i1) & Chr(i2) & Chr(i3) & _
        Chr(i4) & Chr(i5) & Chr(i6) & Chr(n)
        If ActiveSheet.ProtectContents = False Then
        MsgBox "One usable password is " & Chr(i) & Chr(j) & _
        Chr(k) & Chr(l) & Chr(m) & Chr(i1) & Chr(i2) & _
        Chr(i3) & Chr(i4) & Chr(i5) & Chr(i6) & Chr(n)
        Exit Sub
        End If
        Next: Next: Next: Next: Next: Next
        Next: Next: Next: Next: Next: Next
    End Sub
 ```

 If the above method did not work for you then you can try this method for removing passwords from an Excel spreadsheet [link](http://www.excelsupersite.com/how-to-remove-an-excel-spreadsheet-password-in-6-easy-steps/)