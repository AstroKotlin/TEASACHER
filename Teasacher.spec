# -*- mode: python ; coding: utf-8 -*-


a = Analysis(
    ['Teasacher.py'],
    pathex=[],
    binaries=[],
    datas=[('app/*', 'app'), ('data/*', 'data'), ('app/css/*', 'app/css'), ('app/js/*', 'app/js'), ('app/css/image/*', 'app/css/image')],
    hiddenimports=[],
    hookspath=[],
    hooksconfig={},
    runtime_hooks=[],
    excludes=[],
    noarchive=False,
    optimize=0,
)
pyz = PYZ(a.pure)

exe = EXE(
    pyz,
    a.scripts,
    a.binaries,
    a.datas,
    [],
    name='Teasacher',
    debug=False,
    bootloader_ignore_signals=False,
    strip=False,
    upx=True,
    upx_exclude=[],
    runtime_tmpdir=None,
    console=False,
    disable_windowed_traceback=False,
    argv_emulation=False,
    target_arch=None,
    codesign_identity=None,
    entitlements_file=None,
    icon=['icon.ico'],
)
