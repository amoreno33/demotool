const HERRAMIENTAS = [
  { codigo:'100001', linea:'BLOCK', op:'OP10', motores:['C9','C13','C11'], desc:'Face mill cutter',
    piezas:[
      { tipo:'INSERTO', sap:'66230000001123', descripcion:'T490 LNMT 1306PNTR IC810', proveedor:'5605882', armario:'1', cajon:'3', stock:12, sugerida:8, max:24, foto:null},
    ]},
  { codigo:'100002', linea:'BLOCK', op:'OP10', motores:['C13'], desc:'Face mill cutter',
    piezas:[
      { tipo:'INSERTO', sap:'66230000001123', descripcion:'T490 LNMT 1306PNTR IC810', proveedor:'5605882', armario:'1', cajon:'3', stock:8, sugerida:6, max:18, foto:null},
    ]},
  { codigo:'100003', linea:'BLOCK', op:'OP10', motores:['C9','C13','C11'], desc:'Step drill',
    piezas:[
      { tipo:'PUNTA INTERC.', sap:'66230000000459', descripcion:'Ø24,5', proveedor:'4112-24,50', armario:'3', cajon:'8', stock:5, sugerida:1, max:3, foto:null},
      { tipo:'INSERTO', sap:'66230000000723', descripcion:'CCHX 060204L 112', proveedor:'6686-62,040', armario:'1', cajon:'6', stock:4, sugerida:2, max:6, foto:null},
    ]},
  { codigo:'100004', linea:'BLOCK', op:'OP10', motores:['C9','C13','C11'], desc:'Reamer',
    piezas:[
      { tipo:'INSERTO', sap:'66230000000678', descripcion:'DZ92R6W2-HC417', proveedor:'DZ92R6W2', armario:'2', cajon:'4', stock:3, sugerida:1, max:3, foto:null},
    ]},
  { codigo:'100005', linea:'BLOCK', op:'OP10', motores:['C9','C13','C11'], desc:'Face mill cutter',
    piezas:[
      { tipo:'INSERTO', sap:'66230000001123', descripcion:'T490 LNMT 1306PNTR IC810', proveedor:'5605882', armario:'1', cajon:'3', stock:8, sugerida:5, max:15, foto:null},
    ]},
  { codigo:'100006', linea:'BLOCK', op:'OP10', motores:['C9','C13','C11'], desc:'Countersinking tool',
    piezas:[
      { tipo:'INSERTO', sap:'66230000000463', descripcion:'CCMT 09T308 EN', proveedor:'6272-93,080', armario:'1', cajon:'5', stock:5, sugerida:2, max:6, foto:null},
    ]},
  { codigo:'100008', linea:'BLOCK', op:'OP10', motores:['C13','C11'], desc:'Insert drill',
    piezas:[
      { tipo:'PUNTA INTERC.', sap:'66230000000459', descripcion:'Ø24,5', proveedor:'4112-24,50', armario:'3', cajon:'8', stock:2, sugerida:1, max:3, foto:null},
      { tipo:'INSERTO', sap:'66230000000723', descripcion:'CCHX 060204L 112', proveedor:'6686-62,040', armario:'1', cajon:'6', stock:4, sugerida:1, max:3, foto:null},
    ]},
  { codigo:'100009', linea:'BLOCK', op:'OP10', motores:['C13','C11'], desc:'Pilot step drill',
    piezas:[
      { tipo:'PUNTA INTERC.', sap:'66230000000478', descripcion:'Ø20', proveedor:'4113-20,00', armario:'3', cajon:'8', stock:1, sugerida:1, max:3, foto:null},
      { tipo:'INSERTO', sap:'66230000000723', descripcion:'CCHX 060204L 112', proveedor:'6686-62,040', armario:'1', cajon:'6', stock:8, sugerida:4, max:12, foto:null},
    ]},
  { codigo:'100011', linea:'BLOCK', op:'OP10', motores:['C13','C11'], desc:'Step drill',
    piezas:[
      { tipo:'MECHA', sap:'66230000000473', descripcion:'Ø15m7 - Ø20 x 120mm', proveedor:'302 684 151', armario:'3', cajon:'8', stock:5, sugerida:1, max:2, foto:null, stockAfilado:2},
    ]},
  { codigo:'100012', linea:'BLOCK', op:'OP10', motores:['C9','C13','C11'], desc:'Gun drill',
    piezas:[
      { tipo:'MECHA', sap:'66230000001029', descripcion:'Ø15h7 x 355mm', proveedor:'302 684 152', armario:'1', cajon:'9', stock:2, sugerida:1, max:2, foto:null, stockAfilado:3},
    ]},
  { codigo:'100013', linea:'BLOCK', op:'OP10', motores:['C9','C13','C11'], desc:'Gun drill',
    piezas:[
      { tipo:'MECHA', sap:'66230000000475', descripcion:'Ø14,98 x 626mm', proveedor:'302 684 153', armario:'1', cajon:'10', stock:2, sugerida:1, max:2, foto:null, stockAfilado:2},
    ]},
  { codigo:'100014', linea:'BLOCK', op:'OP10', motores:['C13','C11'], desc:'Step drill',
    piezas:[
      { tipo:'PUNTA INTERC.', sap:'66230000000478', descripcion:'Ø20', proveedor:'4113-20,00', armario:'3', cajon:'8', stock:4, sugerida:1, max:3, foto:null},
      { tipo:'INSERTO', sap:'66230000000723', descripcion:'CCHX 060204L 112', proveedor:'6686-62,040', armario:'1', cajon:'6', stock:8, sugerida:4, max:12, foto:null},
    ]},
  { codigo:'100015', linea:'BLOCK', op:'OP10', motores:['C13','C11'], desc:'C´bore tool',
    piezas:[
      { tipo:'PUNTA INTERC.', sap:'66230000000481', descripcion:'Ø25m7 - 15,8mm', proveedor:'4113-25,00', armario:'3', cajon:'8', stock:1, sugerida:1, max:3, foto:null},
      { tipo:'INSERTO', sap:'66230000000723', descripcion:'CCHX 060204L 112', proveedor:'6686-62,040', armario:'1', cajon:'6', stock:8, sugerida:4, max:12, foto:null},
    ]},
  { codigo:'100016', linea:'BLOCK', op:'OP10', motores:['C9','C13','C11'], desc:'Gun drill',
    piezas:[
      { tipo:'PUNTA INTERC.', sap:'66230000001272', descripcion:'QCP200-2M IC908', proveedor:'3325718', armario:'1', cajon:'3', stock:4, sugerida:1, max:3, foto:null},
    ]},
  { codigo:'100017', linea:'BLOCK', op:'OP10', motores:['C9','C13','C11'], desc:'Gun drill',
    piezas:[
      { tipo:'MECHA', sap:'66230000000483', descripcion:'Ø19,98 x 629mm', proveedor:'302 684 158', armario:'1', cajon:'9', stock:3, sugerida:1, max:2, foto:null, stockAfilado:2},
    ]},
  { codigo:'100018', linea:'BLOCK', op:'OP10', motores:['C13','C11'], desc:'Gun drill',
    piezas:[
      { tipo:'MECHA', sap:'66230000000484', descripcion:'Ø25 x 505mm', proveedor:'302 684 160', armario:'1', cajon:'10', stock:3, sugerida:1, max:2, foto:null, stockAfilado:3},
    ]},
  { codigo:'100019', linea:'BLOCK', op:'OP10', motores:['C13','C11'], desc:'Reamer',
    piezas:[
      { tipo:'HPR', sap:'66230000000742', descripcion:'HPR Ø28N9 MX606-1G-HC413', proveedor:'30477243 - 30477248', armario:'2', cajon:'8', stock:2, sugerida:1, max:3, foto:null},
    ]},
  { codigo:'100020', linea:'BLOCK', op:'OP10', motores:['C13','C11'], desc:'Face mill cutter',
    piezas:[
      { tipo:'INSERTO', sap:'66230000001123', descripcion:'T490 LNMT 1306PNTR IC810', proveedor:'5605882', armario:'1', cajon:'3', stock:6, sugerida:6, max:18, foto:null},
    ]},
  { codigo:'100021', linea:'BLOCK', op:'OP10', motores:['C13','C11'], desc:'Step drill',
    piezas:[
      { tipo:'MECHA', sap:'66230000000488', descripcion:'Ø6,8m7 - Ø12 x 94mm', proveedor:'302 684 162', armario:'3', cajon:'8', stock:1, sugerida:1, max:2, foto:null, stockAfilado:3},
    ]},
  { codigo:'100022', linea:'BLOCK', op:'OP10', motores:['C13','C11'], desc:'Tap',
    piezas:[
      { tipo:'MACHO', sap:'66230000001205', descripcion:'M8 x 1,25 x 90mm', proveedor:'2506-8,00', armario:'1', cajon:'6', stock:4, sugerida:1, max:3, foto:null},
    ]},
  { codigo:'100023', linea:'BLOCK', op:'OP10', motores:['C13','C11'], desc:'Tap',
    piezas:[
      { tipo:'MACHO', sap:'66230000000491', descripcion:'M24 x 1,5 x 140mm', proveedor:'302 684 163', armario:'3', cajon:'8', stock:5, sugerida:1, max:3, foto:null},
    ]},
  { codigo:'100024', linea:'BLOCK', op:'OP10', motores:['C13','C11'], desc:'Tap',
    piezas:[
      { tipo:'MACHO', sap:'66230000000820', descripcion:'RP 3/8  x 100mm', proveedor:'302 684 164', armario:'3', cajon:'8', stock:5, sugerida:1, max:3, foto:null},
    ]},
  { codigo:'100026', linea:'BLOCK', op:'OP10', motores:['C9'], desc:'Face mill cutter',
    piezas:[
      { tipo:'INSERTO', sap:'66230000001125', descripcion:'H490 ANKX 120508PNTR IC810', proveedor:'5605882', armario:'1', cajon:'3', stock:5, sugerida:3, max:9, foto:null},
    ]},
  { codigo:'100027', linea:'BLOCK', op:'OP10', motores:['C9'], desc:'Face mill cutter',
    piezas:[
      { tipo:'INSERTO', sap:'66230000001267', descripcion:'T490 LNMT 080408PNR IC810', proveedor:'5607680', armario:'3', cajon:'3', stock:6, sugerida:5, max:15, foto:null},
    ]},
  { codigo:'100029', linea:'BLOCK', op:'OP10', motores:['C9'], desc:'Step drill',
    piezas:[
      { tipo:'MECHA', sap:'66230000000500', descripcion:'Ø15m7 - Ø21,5m7 x 140mm', proveedor:'302 694 532', armario:'3', cajon:'8', stock:5, sugerida:1, max:2, foto:null, stockAfilado:1},
    ]},
  { codigo:'100030', linea:'BLOCK', op:'OP10', motores:['C9'], desc:'Step drill',
    piezas:[
      { tipo:'MECHA', sap:'66230000000501', descripcion:'Ø20m7 - Ø25m7 x 160mm', proveedor:'302 694 529', armario:'3', cajon:'8', stock:5, sugerida:1, max:2, foto:null, stockAfilado:2},
    ]},
  { codigo:'100031', linea:'BLOCK', op:'OP10', motores:['C9'], desc:'C´bore tool',
    piezas:[
      { tipo:'INSERTO', sap:'66230000000503', descripcion:'CCHT 060208 E04L-1J-HP455', proveedor:'30357509 - 30950289', armario:'2', cajon:'3', stock:3, sugerida:3, max:9, foto:null},
    ]},
  { codigo:'100032', linea:'BLOCK', op:'OP10', motores:['C9'], desc:'Reamer',
    piezas:[
      { tipo:'HPR', sap:'66230000000933', descripcion:'Ø22N9-HC413', proveedor:'30219157', armario:'2', cajon:'8', stock:2, sugerida:1, max:3, foto:null},
    ]},
  { codigo:'100033', linea:'BLOCK', op:'OP10', motores:['C9'], desc:'Insert drill',
    piezas:[
      { tipo:'PUNTA INTERC.', sap:'66230000000481', descripcion:'Ø25m7 - 15,8mm', proveedor:'4113-25,00', armario:'3', cajon:'8', stock:4, sugerida:1, max:3, foto:null},
    ]},
  { codigo:'100034', linea:'BLOCK', op:'OP10', motores:['C9'], desc:'Gun drill',
    piezas:[
      { tipo:'MECHA', sap:'66230000000508', descripcion:'Ø20 - Ø24,975 x 535mm', proveedor:'302 694 528', armario:'1', cajon:'10', stock:2, sugerida:1, max:2, foto:null, stockAfilado:2},
    ]},
  { codigo:'100035', linea:'BLOCK', op:'OP10', motores:['C9'], desc:'C´bore tool',
    piezas:[
      { tipo:'INSERTO', sap:'66230000000503', descripcion:'CCHT 060208 E04L-1J-HP455', proveedor:'30357509 - 30950289', armario:'2', cajon:'3', stock:6, sugerida:2, max:6, foto:null},
      { tipo:'INSERTO', sap:'66230000000041', descripcion:'SPHT 060304 E04L-2L-HC725', proveedor:'30217118 - 30679971', armario:'2', cajon:'1', stock:6, sugerida:2, max:6, foto:null},
    ]},
  { codigo:'100038', linea:'BLOCK', op:'OP10', motores:['C9'], desc:'C´bore tool',
    piezas:[
      { tipo:'PUNTA INTERC.', sap:'66230000000513', descripcion:'Ø37,5x30mm', proveedor:'30479875', armario:'2', cajon:'10', stock:2, sugerida:1, max:3, foto:null},
    ]},
  { codigo:'100039', linea:'BLOCK', op:'OP10', motores:['C9'], desc:'Step drill',
    piezas:[
      { tipo:'INSERTO', sap:'66230000000517', descripcion:'SHLT110408N-PH1 IN2005', proveedor:'5140194', armario:'1', cajon:'2', stock:6, sugerida:6, max:18, foto:null},
    ]},
  { codigo:'100040', linea:'BLOCK', op:'OP10', motores:['C9'], desc:'C´bore tool',
    piezas:[
      { tipo:'PUNTA INTERC.', sap:'66230000000459', descripcion:'Ø24,5', proveedor:'4112-24,50', armario:'3', cajon:'8', stock:4, sugerida:1, max:3, foto:null},
      { tipo:'INSERTO', sap:'66230000000723', descripcion:'CCHX 060204L 112', proveedor:'6686-62,040', armario:'1', cajon:'6', stock:6, sugerida:2, max:6, foto:null},
    ]},
  { codigo:'100043', linea:'BLOCK', op:'OP10', motores:['C9','C13','C11'], desc:'Milling cutter',
    piezas:[
      { tipo:'FRESA', sap:'66230000001274', descripcion:'Ø20', proveedor:'3407-20,000', armario:'3', cajon:'2', stock:3, sugerida:1, max:3, foto:null},
    ]},
  { codigo:'100050', linea:'BLOCK', op:'OP10', motores:['C9','C13','C11'], desc:'Reamer',
    piezas:[
      { tipo:'INSERTO', sap:'66230000000678', descripcion:'DZ92R6W2-HC417', proveedor:'DZ92R6W2', armario:'2', cajon:'4', stock:3, sugerida:1, max:3, foto:null},
    ]},
  { codigo:'100060', linea:'BLOCK', op:'OP10', motores:['C11'], desc:'Face mill cutter',
    piezas:[
      { tipo:'INSERTO', sap:'66230000000053', descripcion:'SCHT 09T304 E04X-1J-HP455', proveedor:'30229240 - 30953127', armario:'2', cajon:'1', stock:4, sugerida:3, max:9, foto:null},
      { tipo:'INSERTO', sap:'66230000000054', descripcion:'CCHT 09T304 E04L-1L-HP455', proveedor:'30229239 - 30454738', armario:'2', cajon:'1', stock:5, sugerida:3, max:9, foto:null},
      { tipo:'INSERTO', sap:'66230000001112', descripcion:'CTHD 13T304D02L-HP455', proveedor:'30029821', armario:'2', cajon:'6', stock:3, sugerida:2, max:6, foto:null},
      { tipo:'INSERTO', sap:'66230000001113', descripcion:'CTHD 09T304D02L-HP455', proveedor:'30225911', armario:'2', cajon:'7', stock:6, sugerida:2, max:6, foto:null},
    ]},
  { codigo:'100061', linea:'BLOCK', op:'OP10', motores:[], desc:'Carbide drill',
    piezas:[
      { tipo:'MECHA', sap:'66230000000858', descripcion:'Ø9,8m7 - Ø12 x 97mm', proveedor:'302 684 180', armario:'4', cajon:'6', stock:4, sugerida:1, max:2, foto:null, stockAfilado:0},
    ]},
  { codigo:'100062', linea:'BLOCK', op:'OP10', motores:[], desc:'Reamer',
    piezas:[
      { tipo:'INSERTO', sap:'66230000000656', descripcion:'Inserto especial Gühring - Mapal', proveedor:'30320395', armario:'1', cajon:'5', stock:5, sugerida:1, max:3, foto:null},
    ]},
  { codigo:'100063', linea:'BLOCK', op:'OP10', motores:[], desc:'Drill',
    piezas:[
      { tipo:'MECHA', sap:'66230000000859', descripcion:'Ø10m7 x 150mm', proveedor:'302 684 224', armario:'4', cajon:'6', stock:2, sugerida:1, max:2, foto:null, stockAfilado:2},
    ]},
  { codigo:'200001', linea:'BLOCK', op:'OP20', motores:['C9','C13','C11'], desc:'Face mill cutter',
    piezas:[
      { tipo:'INSERTO', sap:'66230000001149', descripcion:'745R-2109E-M50 K20D', proveedor:'745R-2109E-M50 K20D', armario:'1', cajon:'4', stock:17, sugerida:16, max:48, foto:null},
    ]},
  { codigo:'200002', linea:'BLOCK', op:'OP20', motores:['C13','C11'], desc:'Boring bar',
    piezas:[
      { tipo:'INSERTO', sap:'66230000000530', descripcion:'S10252-10B6412/11-HP455', proveedor:'30377923', armario:'2', cajon:'3', stock:5, sugerida:4, max:12, foto:null},
    ]},
  { codigo:'200003', linea:'BLOCK', op:'OP20', motores:['C9','C13','C11'], desc:'Side milling cutter',
    piezas:[
      { tipo:'INSERTO', sap:'66230000000761', descripcion:'DGM314L001 IN2005', proveedor:'5830732', armario:'1', cajon:'2', stock:11, sugerida:10, max:30, foto:null},
    ]},
  { codigo:'200004', linea:'BLOCK', op:'OP20', motores:['C13','C11'], desc:'Ball mill cutter',
    piezas:[
      { tipo:'INSERTO', sap:'66230000000537', descripcion:'SPE-55R142 J IN2030', proveedor:'5853471', armario:'1', cajon:'2', stock:23, sugerida:20, max:60, foto:null},
    ]},
  { codigo:'200008', linea:'BLOCK', op:'OP20', motores:['C13','C11'], desc:'Step drill',
    piezas:[
      { tipo:'MECHA', sap:'66230000000550', descripcion:'Ø16m7 - Ø18,5m7 x 180mm', proveedor:'302 684 166', armario:'3', cajon:'8', stock:5, sugerida:1, max:2, foto:null, stockAfilado:0},
    ]},
  { codigo:'200009', linea:'BLOCK', op:'OP20', motores:['C13','C11'], desc:'Step drill',
    piezas:[
      { tipo:'MECHA', sap:'66230000000551', descripcion:'Ø10,2m7 - Ø13m7 x 110mm', proveedor:'302 684 167', armario:'3', cajon:'8', stock:5, sugerida:1, max:2, foto:null, stockAfilado:0},
    ]},
  { codigo:'200010', linea:'BLOCK', op:'OP20', motores:['C13','C11'], desc:'Face mill cutter',
    piezas:[
      { tipo:'INSERTO', sap:'66230000001123', descripcion:'T490 LNMT 1306PNTR IC810', proveedor:'5605882', armario:'1', cajon:'3', stock:6, sugerida:6, max:18, foto:null},
    ]},
  { codigo:'200011', linea:'BLOCK', op:'OP20', motores:['C9','C13','C11'], desc:'Face mill cutter',
    piezas:[
      { tipo:'INSERTO', sap:'66230000000456', descripcion:'BOMT09T308R IN2505', proveedor:'5812698', armario:'1', cajon:'2', stock:10, sugerida:7, max:21, foto:null},
    ]},
  { codigo:'200013', linea:'BLOCK', op:'OP20', motores:['C13','C11'], desc:'Tap',
    piezas:[
      { tipo:'MACHO', sap:'66230000000558', descripcion:'M18 x 2  x 150mm', proveedor:'302 684 168', armario:'3', cajon:'8', stock:4, sugerida:1, max:3, foto:null},
    ]},
  { codigo:'200014', linea:'BLOCK', op:'OP20', motores:['C13','C11'], desc:'Tap',
    piezas:[
      { tipo:'MACHO', sap:'66230000001241', descripcion:'M12 x 1,75 x 110mm', proveedor:'1883-12,00', armario:'1', cajon:'6', stock:3, sugerida:1, max:3, foto:null},
    ]},
  { codigo:'200015', linea:'BLOCK', op:'OP20', motores:['C13','C11'], desc:'Drill',
    piezas:[
      { tipo:'MECHA', sap:'66230000000559', descripcion:'Ø13,5m7 - Ø16 x 115mm', proveedor:'302 684 169', armario:'3', cajon:'9', stock:4, sugerida:1, max:2, foto:null, stockAfilado:1},
    ]},
  { codigo:'200016', linea:'BLOCK', op:'OP20', motores:['C13','C11'], desc:'Drill',
    piezas:[
      { tipo:'MECHA', sap:'66230000000560', descripcion:'Ø16m7 - Ø18 x 115mm', proveedor:'302 731 103', armario:'3', cajon:'9', stock:5, sugerida:1, max:2, foto:null, stockAfilado:0},
    ]},
  { codigo:'200017', linea:'BLOCK', op:'OP20', motores:['C13','C11'], desc:'Drill',
    piezas:[
      { tipo:'MECHA', sap:'66230000000561', descripcion:'Ø16h7 x 220mm', proveedor:'302 684 171', armario:'3', cajon:'9', stock:3, sugerida:1, max:2, foto:null, stockAfilado:0},
    ]},
  { codigo:'200018', linea:'BLOCK', op:'OP20', motores:['C13','C11'], desc:'Drill',
    piezas:[
      { tipo:'PUNTA INTERC.', sap:'66230000000481', descripcion:'Ø25m7 - 15,8mm', proveedor:'4113-25,00', armario:'3', cajon:'8', stock:1, sugerida:1, max:3, foto:null},
    ]},
  { codigo:'200020', linea:'BLOCK', op:'OP20', motores:['C9'], desc:'Milling Cutter',
    piezas:[
      { tipo:'INSERTO', sap:'66230000000964', descripcion:'LXD323R112 A IN2015', proveedor:'5868096', armario:'1', cajon:'2', stock:20, sugerida:20, max:60, foto:null},
    ]},
  { codigo:'200021', linea:'BLOCK', op:'OP20', motores:['C9'], desc:'Ball mill cutter',
    piezas:[
      { tipo:'INSERTO', sap:'66230000000537', descripcion:'SPE-55R142 J IN2030', proveedor:'5853471', armario:'1', cajon:'2', stock:24, sugerida:20, max:60, foto:null},
    ]},
  { codigo:'200022', linea:'BLOCK', op:'OP20', motores:['C9'], desc:'Step drill',
    piezas:[
      { tipo:'MECHA', sap:'66230000000570', descripcion:'Ø8,5m7 - Ø12m7 x 100', proveedor:'302 694 534', armario:'3', cajon:'9', stock:3, sugerida:1, max:2, foto:null, stockAfilado:3},
    ]},
  { codigo:'200023', linea:'BLOCK', op:'OP20', motores:['C9'], desc:'Step drill',
    piezas:[
      { tipo:'MECHA', sap:'66230000000571', descripcion:'Ø8,5m7 - Ø12m7 x 102', proveedor:'302 694 535', armario:'3', cajon:'9', stock:2, sugerida:1, max:2, foto:null, stockAfilado:3},
    ]},
  { codigo:'200024', linea:'BLOCK', op:'OP20', motores:['C9'], desc:'Step drill',
    piezas:[
      { tipo:'MECHA', sap:'66230000000572', descripcion:'Ø6,8m7 - Ø10h7 x 85mm', proveedor:'302 694 537', armario:'3', cajon:'9', stock:5, sugerida:1, max:2, foto:null, stockAfilado:3},
    ]},
  { codigo:'200025', linea:'BLOCK', op:'OP20', motores:['C9'], desc:'Tap',
    piezas:[
      { tipo:'MACHO', sap:'66230000001205', descripcion:'M8 x 1,25 x 90mm', proveedor:'2506-8,00', armario:'1', cajon:'6', stock:3, sugerida:1, max:3, foto:null},
    ]},
  { codigo:'200026', linea:'BLOCK', op:'OP20', motores:['C9'], desc:'Tap',
    piezas:[
      { tipo:'MACHO', sap:'66230000001206', descripcion:'M10 x 1,5 x 100mm', proveedor:'2506-10,00', armario:'1', cajon:'6', stock:4, sugerida:1, max:3, foto:null},
    ]},
  { codigo:'200027', linea:'BLOCK', op:'OP20', motores:['C9'], desc:'Step drill',
    piezas:[
      { tipo:'MECHA', sap:'66230000000575', descripcion:'Ø14m7 - Ø16,5m7 - 18h7 x 142mm', proveedor:'302 694 538', armario:'3', cajon:'9', stock:4, sugerida:1, max:2, foto:null, stockAfilado:0},
    ]},
  { codigo:'200028', linea:'BLOCK', op:'OP20', motores:['C9'], desc:'Tap',
    piezas:[
      { tipo:'MACHO', sap:'66230000000577', descripcion:'M16 x 2  x 110mm', proveedor:'302 693 913', armario:'3', cajon:'9', stock:4, sugerida:1, max:3, foto:null},
    ]},
  { codigo:'200036', linea:'BLOCK', op:'OP20', motores:['C9'], desc:'Boring bar',
    piezas:[
      { tipo:'INSERTO', sap:'66230000000520', descripcion:'CCHT 120408 E04L-1J-HP455', proveedor:'30184558', armario:'2', cajon:'3', stock:5, sugerida:4, max:12, foto:null},
      { tipo:'INSERTO', sap:'66230000000521', descripcion:'CCHT 09T302 E04L-1J-HP455', proveedor:'30501549', armario:'2', cajon:'3', stock:10, sugerida:8, max:24, foto:null},
    ]},
  { codigo:'200050', linea:'BLOCK', op:'OP20', motores:['C13','C11'], desc:'End mill cutter',
    piezas:[
      { tipo:'INSERTO', sap:'66230000001123', descripcion:'T490 LNMT 1306PNTR IC810', proveedor:'5605882', armario:'1', cajon:'3', stock:25, sugerida:21, max:63, foto:null},
    ]},
  { codigo:'200060', linea:'BLOCK', op:'OP20', motores:['C9'], desc:'End mill cutter',
    piezas:[
      { tipo:'FRESA', sap:'66230000001470', descripcion:'Ø25', proveedor:'5582-25,00', armario:'3', cajon:'9', stock:3, sugerida:1, max:3, foto:null},
    ]},
  { codigo:'200070', linea:'BLOCK', op:'OP20', motores:['C9'], desc:'Side milling cutter x2',
    piezas:[
      { tipo:'INSERTO', sap:'66230000000544', descripcion:'DPM324-001 A IN2005', proveedor:'5811541', armario:'1', cajon:'2', stock:17, sugerida:16, max:48, foto:null},
    ]},
  { codigo:'200107', linea:'BLOCK', op:'OP20', motores:['C9','C13','C11'], desc:'Side milling cutter',
    piezas:[
      { tipo:'INSERTO', sap:'66230000000547', descripcion:'SDE-42 -201 J IN4030', proveedor:'5856678', armario:'1', cajon:'2', stock:16, sugerida:12, max:36, foto:null},
    ]},
  { codigo:'200207', linea:'BLOCK', op:'OP20', motores:['C9','C13','C11'], desc:'Side milling cutter',
    piezas:[
      { tipo:'INSERTO', sap:'66230000000547', descripcion:'SDE-42 -201 J IN4030', proveedor:'5856678', armario:'1', cajon:'2', stock:12, sugerida:12, max:36, foto:null},
    ]},
  { codigo:'300001', linea:'BLOCK', op:'OP30', motores:[], desc:'',
    piezas:[
      { tipo:'INSERTO', sap:'66230000001149', descripcion:'745R-2109E-M50 K20D', proveedor:'745R-2109E-M50 K20D', armario:'1', cajon:'4', stock:18, sugerida:14, max:42, foto:null},
    ]},
  { codigo:'30002', linea:'BLOCK', op:'OP30', motores:[], desc:'',
    piezas:[
      { tipo:'INSERTO', sap:'66230000001366', descripcion:'ONMU 080612-HL IC910', proveedor:'5605377', armario:'1', cajon:'3', stock:17, sugerida:15, max:45, foto:null},
    ]},
  { codigo:'30003', linea:'BLOCK', op:'OP30', motores:[], desc:'',
    piezas:[
      { tipo:'INSERTO', sap:'66230000000599', descripcion:'CTHD 120408 D02L-HP455', proveedor:'30225823', armario:'2', cajon:'3', stock:14, sugerida:12, max:36, foto:null},
    ]},
  { codigo:'30004', linea:'BLOCK', op:'OP30', motores:[], desc:'',
    piezas:[
      { tipo:'INSERTO', sap:'66230000000601', descripcion:'WTHQ 090608 A54L 10B041-HP455', proveedor:'30241196', armario:'2', cajon:'3', stock:9, sugerida:6, max:18, foto:null},
    ]},
  { codigo:'30005', linea:'BLOCK', op:'OP30', motores:[], desc:'',
    piezas:[
      { tipo:'INSERTO', sap:'66230000000605', descripcion:'CTHE 09T308 D02R-HP455', proveedor:'30328491', armario:'2', cajon:'4', stock:6, sugerida:3, max:9, foto:null},
      { tipo:'INSERTO', sap:'66230000000606', descripcion:'CTHD 09T330 D02R-HP455', proveedor:'30226971', armario:'2', cajon:'4', stock:7, sugerida:3, max:9, foto:null},
      { tipo:'INSERTO', sap:'66230000001002', descripcion:'CTHD 09T308 D02L-HP455', proveedor:'30042913', armario:'2', cajon:'6', stock:4, sugerida:3, max:9, foto:null},
    ]},
  { codigo:'30006', linea:'BLOCK', op:'OP30', motores:[], desc:'',
    piezas:[
      { tipo:'INSERTO', sap:'66230000000605', descripcion:'CTHE 09T308 D02R-HP455', proveedor:'30328491', armario:'2', cajon:'4', stock:6, sugerida:4, max:12, foto:null},
      { tipo:'INSERTO', sap:'66230000000606', descripcion:'CTHD 09T330 D02R-HP455', proveedor:'30226971', armario:'2', cajon:'4', stock:5, sugerida:4, max:12, foto:null},
      { tipo:'INSERTO', sap:'66230000000622', descripcion:'CTHD 120430 D04L-HP455', proveedor:'30331263', armario:'2', cajon:'4', stock:4, sugerida:3, max:9, foto:null},
    ]},
  { codigo:'30007', linea:'BLOCK', op:'OP30', motores:[], desc:'',
    piezas:[
      { tipo:'MECHA', sap:'66230000000570', descripcion:'Ø8,5m7 - Ø12m7 x 100', proveedor:'302 694 534', armario:'3', cajon:'9', stock:3, sugerida:1, max:2, foto:null, stockAfilado:1},
    ]},
  { codigo:'30008', linea:'BLOCK', op:'OP30', motores:[], desc:'',
    piezas:[
      { tipo:'MACHO', sap:'66230000001206', descripcion:'M10 x 1,5 x 100mm', proveedor:'2506-10,00', armario:'1', cajon:'6', stock:4, sugerida:1, max:3, foto:null},
    ]},
  { codigo:'30010', linea:'BLOCK', op:'OP30', motores:[], desc:'',
    piezas:[
      { tipo:'MECHA', sap:'66230000000613', descripcion:'Ø15m7 - Ø25 x 135mm', proveedor:'302 694 543', armario:'3', cajon:'9', stock:4, sugerida:1, max:2, foto:null, stockAfilado:3},
    ]},
  { codigo:'30011', linea:'BLOCK', op:'OP30', motores:[], desc:'',
    piezas:[
      { tipo:'INSERTO', sap:'66230000001267', descripcion:'T490 LNMT 080408PNR IC810', proveedor:'5607680', armario:'3', cajon:'3', stock:8, sugerida:5, max:15, foto:null},
    ]},
  { codigo:'30012', linea:'BLOCK', op:'OP30', motores:[], desc:'',
    piezas:[
      { tipo:'INSERTO', sap:'66230000000053', descripcion:'SCHT 09T304 E04X-1J-HP455', proveedor:'30229240 - 30953127', armario:'2', cajon:'1', stock:6, sugerida:6, max:18, foto:null},
      { tipo:'INSERTO', sap:'66230000000520', descripcion:'CCHT 120408 E04L-1J-HP455', proveedor:'30184558', armario:'2', cajon:'3', stock:7, sugerida:4, max:12, foto:null},
    ]},
  { codigo:'30013', linea:'BLOCK', op:'OP30', motores:[], desc:'',
    piezas:[
      { tipo:'MECHA', sap:'66230000000617', descripcion:'Ø10,5m7 - Ø14 x 90mm', proveedor:'302 694 542', armario:'3', cajon:'3', stock:5, sugerida:1, max:2, foto:null, stockAfilado:3},
    ]},
  { codigo:'30014', linea:'BLOCK', op:'OP30', motores:[], desc:'',
    piezas:[
      { tipo:'INSERTO', sap:'66230000000601', descripcion:'WTHQ 090608 A54L 10B041-HP455', proveedor:'30241196', armario:'2', cajon:'3', stock:6, sugerida:6, max:18, foto:null},
    ]},
  { codigo:'30015', linea:'BLOCK', op:'OP30', motores:[], desc:'',
    piezas:[
      { tipo:'INSERTO', sap:'66230000000606', descripcion:'CTHD 09T330 D02R-HP455', proveedor:'30226971', armario:'2', cajon:'4', stock:5, sugerida:3, max:9, foto:null},
      { tipo:'INSERTO', sap:'66230000000620', descripcion:'SCHT 09T308 E04X-1L-HP455', proveedor:'30478146', armario:'2', cajon:'4', stock:3, sugerida:3, max:9, foto:null},
      { tipo:'INSERTO', sap:'66230000000622', descripcion:'CTHD 120430 D04L-HP455', proveedor:'30331263', armario:'2', cajon:'4', stock:7, sugerida:3, max:9, foto:null},
    ]},
  { codigo:'30018', linea:'BLOCK', op:'OP30', motores:[], desc:'',
    piezas:[
      { tipo:'MECHA', sap:'66230000000626', descripcion:'Ø10m7 - Ø12 x 102mm', proveedor:'302 694 539', armario:'3', cajon:'9', stock:3, sugerida:1, max:2, foto:null, stockAfilado:1},
    ]},
  { codigo:'30019', linea:'BLOCK', op:'OP30', motores:[], desc:'',
    piezas:[
      { tipo:'MECHA', sap:'66230000000627', descripcion:'Ø12m7 - Ø14 x 107mm', proveedor:'302 694 540', armario:'3', cajon:'9', stock:4, sugerida:1, max:2, foto:null, stockAfilado:1},
    ]},
  { codigo:'30020', linea:'BLOCK', op:'OP30', motores:[], desc:'',
    piezas:[
      { tipo:'MECHA', sap:'66230000000628', descripcion:'Ø16m7 - Ø18 x 123mm', proveedor:'302 694 544', armario:'3', cajon:'10', stock:5, sugerida:1, max:2, foto:null, stockAfilado:2},
    ]},
  { codigo:'30021', linea:'BLOCK', op:'OP30', motores:[], desc:'',
    piezas:[
      { tipo:'INSERTO', sap:'66230000000630', descripcion:'RHKW2006M0TN IN4015', proveedor:'5865970', armario:'1', cajon:'2', stock:5, sugerida:3, max:9, foto:null},
    ]},
  { codigo:'30022', linea:'BLOCK', op:'OP30', motores:[], desc:'',
    piezas:[
      { tipo:'INSERTO', sap:'66230000000761', descripcion:'DGM314L001 IN2005', proveedor:'5830732', armario:'1', cajon:'2', stock:14, sugerida:10, max:30, foto:null},
      { tipo:'INSERTO', sap:'66230000000762', descripcion:'DGM212R101 K IN2505', proveedor:'5850378', armario:'1', cajon:'2', stock:6, sugerida:5, max:15, foto:null},
    ]},
  { codigo:'30037', linea:'BLOCK', op:'OP30', motores:[], desc:'',
    piezas:[
      { tipo:'MACHO', sap:'66230000001205', descripcion:'M8 x 1,25 x 90mm', proveedor:'2506-8,00', armario:'1', cajon:'6', stock:4, sugerida:1, max:3, foto:null},
    ]},
  { codigo:'30048', linea:'BLOCK', op:'OP30', motores:[], desc:'',
    piezas:[
      { tipo:'MECHA', sap:'66230000000792', descripcion:'Ø6,8m7 - Ø10h7 x 89mm', proveedor:'302 698 827', armario:'4', cajon:'4', stock:3, sugerida:1, max:2, foto:null, stockAfilado:3},
    ]},
  { codigo:'30049', linea:'BLOCK', op:'OP30', motores:[], desc:'',
    piezas:[
      { tipo:'MECHA', sap:'66230000001482', descripcion:'Ø8,5m7 - Ø12h7 x 102mm', proveedor:'B976AS6579350 KC7315', armario:'1', cajon:'4', stock:4, sugerida:1, max:2, foto:null, stockAfilado:0},
    ]},
  { codigo:'30050', linea:'BLOCK', op:'OP30', motores:[], desc:'',
    piezas:[
      { tipo:'INSERTO', sap:'66230000001369', descripcion:'SCMT 120404 EN', proveedor:'6239-124,040', armario:'1', cajon:'4', stock:7, sugerida:4, max:12, foto:null},
      { tipo:'INSERTO', sap:'66230000001442', descripcion:'TCMT 16T304 N - 6238-163,04', proveedor:'6238-163,040', armario:'5', cajon:'8', stock:6, sugerida:2, max:6, foto:null},
      { tipo:'INSERTO', sap:'66230000001443', descripcion:'ES1300-303623696L G12', proveedor:'303 623 696', armario:'5', cajon:'8', stock:3, sugerida:2, max:6, foto:null},
    ]},
  { codigo:'30051', linea:'BLOCK', op:'OP30', motores:[], desc:'',
    piezas:[
      { tipo:'INSERTO', sap:'66230000001377', descripcion:'TPCOXX-303623895R G12', proveedor:'303 623 895', armario:'5', cajon:'8', stock:11, sugerida:8, max:24, foto:null},
      { tipo:'INSERTO', sap:'66230000001378', descripcion:'TPCOXX-303623896R G12', proveedor:'303 623 896', armario:'5', cajon:'8', stock:12, sugerida:8, max:24, foto:null},
      { tipo:'INSERTO', sap:'66230000001380', descripcion:'TPCOXX-303673675L G12', proveedor:'303 673 675', armario:'5', cajon:'8', stock:5, sugerida:4, max:12, foto:null},
    ]},
  { codigo:'30053', linea:'BLOCK', op:'OP30', motores:[], desc:'',
    piezas:[
      { tipo:'INSERTO', sap:'66230000001444', descripcion:'TPCOXX-303644383L G12', proveedor:'303 644 383', armario:'5', cajon:'8', stock:8, sugerida:6, max:18, foto:null},
    ]},
  { codigo:'30054', linea:'BLOCK', op:'OP30', motores:[], desc:'',
    piezas:[
      { tipo:'INSERTO', sap:'66230000001377', descripcion:'TPCOXX-303623895R G12', proveedor:'303 623 895', armario:'5', cajon:'8', stock:12, sugerida:8, max:24, foto:null},
      { tipo:'INSERTO', sap:'66230000001378', descripcion:'TPCOXX-303623896R G12', proveedor:'303 623 896', armario:'5', cajon:'8', stock:9, sugerida:8, max:24, foto:null},
      { tipo:'INSERTO', sap:'66230000001380', descripcion:'TPCOXX-303673675L G12', proveedor:'303 673 675', armario:'5', cajon:'8', stock:4, sugerida:4, max:12, foto:null},
    ]},
  { codigo:'30056', linea:'BLOCK', op:'OP30', motores:[], desc:'',
    piezas:[
      { tipo:'FRESA', sap:'', descripcion:'Ø25h10 x 121mm (R2)', proveedor:'3872-25,020', armario:'5', cajon:'8', stock:4, sugerida:1, max:3, foto:null},
    ]},
  { codigo:'40001', linea:'BLOCK', op:'OP40', motores:[], desc:'',
    piezas:[
      { tipo:'MECHA', sap:'66230000000639', descripcion:'Ø12,5m7 - Ø14,8m7 x 115mm', proveedor:'302 684 172', armario:'3', cajon:'10', stock:3, sugerida:1, max:2, foto:null, stockAfilado:0},
    ]},
  { codigo:'40002', linea:'BLOCK', op:'OP40', motores:[], desc:'',
    piezas:[
      { tipo:'MECHA', sap:'66230000000641', descripcion:'Ø10m7  x 131mm', proveedor:'302 684 173', armario:'3', cajon:'10', stock:2, sugerida:1, max:2, foto:null, stockAfilado:2},
    ]},
  { codigo:'40003', linea:'BLOCK', op:'OP40', motores:[], desc:'',
    piezas:[
      { tipo:'MACHO', sap:'66230000000642', descripcion:'M14 x 1,5 x 100mm', proveedor:'302 693 918', armario:'3', cajon:'10', stock:5, sugerida:1, max:3, foto:null},
    ]},
  { codigo:'40004', linea:'BLOCK', op:'OP40', motores:[], desc:'',
    piezas:[
      { tipo:'MECHA', sap:'66230000000643', descripcion:'Ø5,6m7 - Ø8 x 80mm', proveedor:'302 684 175', armario:'3', cajon:'10', stock:5, sugerida:1, max:2, foto:null, stockAfilado:2},
    ]},
  { codigo:'40005', linea:'BLOCK', op:'OP40', motores:[], desc:'',
    piezas:[
      { tipo:'ESCARIADOR', sap:'66230000000644', descripcion:'Ø6-HP421', proveedor:'30477246', armario:'2', cajon:'9', stock:3, sugerida:1, max:3, foto:null},
    ]},
  { codigo:'40006', linea:'BLOCK', op:'OP40', motores:[], desc:'',
    piezas:[
      { tipo:'INSERTO', sap:'66230000000376', descripcion:'OPDN53-100 IN70N', proveedor:'5868046', armario:'1', cajon:'1', stock:18, sugerida:14, max:42, foto:null},
      { tipo:'INSERTO', sap:'66230000000377', descripcion:'YWH454L101 IN80B', proveedor:'5202781', armario:'1', cajon:'1', stock:6, sugerida:3, max:9, foto:null},
    ]},
  { codigo:'40007', linea:'BLOCK', op:'OP40', motores:[], desc:'',
    piezas:[
      { tipo:'MECHA', sap:'66230000000437', descripcion:'Ø10m7 x 139mm', proveedor:'5512-10,0', armario:'3', cajon:'2', stock:3, sugerida:1, max:2, foto:null, stockAfilado:0},
    ]},
  { codigo:'40008', linea:'BLOCK', op:'OP40', motores:[], desc:'',
    piezas:[
      { tipo:'MECHA', sap:'66230000000652', descripcion:'Ø10 h7 x 271mm', proveedor:'6511-10,00', armario:'1', cajon:'7', stock:4, sugerida:1, max:2, foto:null, stockAfilado:1},
    ]},
  { codigo:'40009', linea:'BLOCK', op:'OP40', motores:[], desc:'',
    piezas:[
      { tipo:'MECHA', sap:'66230000000653', descripcion:'Ø18,5m7 x 141mm', proveedor:'302 684 178', armario:'3', cajon:'10', stock:3, sugerida:1, max:2, foto:null, stockAfilado:1},
    ]},
  { codigo:'40010', linea:'BLOCK', op:'OP40', motores:[], desc:'',
    piezas:[
      { tipo:'MECHA', sap:'66230000000654', descripcion:'Ø16m7 x 175mm', proveedor:'302 684 179', armario:'3', cajon:'10', stock:3, sugerida:1, max:2, foto:null, stockAfilado:2},
    ]},
  { codigo:'40011', linea:'BLOCK', op:'OP40', motores:[], desc:'',
    piezas:[
      { tipo:'MACHO', sap:'66230000001577', descripcion:'M18x2', proveedor:'53952687', armario:'3', cajon:'10', stock:3, sugerida:1, max:3, foto:null},
    ]},
  { codigo:'40012', linea:'BLOCK', op:'OP40', motores:[], desc:'',
    piezas:[
      { tipo:'MECHA', sap:'66230000000655', descripcion:'Ø9,8m7 x 89mm', proveedor:'2477-9,8', armario:'3', cajon:'10', stock:4, sugerida:1, max:2, foto:null, stockAfilado:3},
    ]},
  { codigo:'40013', linea:'BLOCK', op:'OP40', motores:[], desc:'',
    piezas:[
      { tipo:'INSERTO', sap:'66230000000656', descripcion:'Inserto especial Gühring - Mapal', proveedor:'30320395', armario:'1', cajon:'5', stock:3, sugerida:1, max:3, foto:null},
    ]},
  { codigo:'40014', linea:'BLOCK', op:'OP40', motores:[], desc:'',
    piezas:[
      { tipo:'MECHA', sap:'66230000000437', descripcion:'Ø10m7 x 139mm', proveedor:'5512-10,0', armario:'3', cajon:'2', stock:4, sugerida:1, max:2, foto:null, stockAfilado:3},
    ]},
  { codigo:'40015', linea:'BLOCK', op:'OP40', motores:[], desc:'',
    piezas:[
      { tipo:'MECHA', sap:'66230000000660', descripcion:'Ø10 h7 x 321mm', proveedor:'6512-10,00', armario:'1', cajon:'7', stock:4, sugerida:1, max:2, foto:null, stockAfilado:2},
    ]},
  { codigo:'40016', linea:'BLOCK', op:'OP40', motores:[], desc:'',
    piezas:[
      { tipo:'INSERTO', sap:'66230000000306', descripcion:'NND313-111 IN2010', proveedor:'5872029', armario:'1', cajon:'1', stock:16, sugerida:15, max:45, foto:null},
      { tipo:'INSERTO', sap:'66230000000308', descripcion:'YXD323-101 IN2004', proveedor:'5870012', armario:'1', cajon:'1', stock:5, sugerida:3, max:9, foto:null},
    ]},
  { codigo:'40017', linea:'BLOCK', op:'OP40', motores:[], desc:'',
    piezas:[
      { tipo:'INSERTO', sap:'66230000001122', descripcion:'SHLT090408N-PH1 IN2005', proveedor:'5140193', armario:'1', cajon:'3', stock:3, sugerida:2, max:6, foto:null},
    ]},
  { codigo:'40018', linea:'BLOCK', op:'OP40', motores:[], desc:'',
    piezas:[
      { tipo:'INSERTO', sap:'66230000000663', descripcion:'Ø12,5m7 x 105mm', proveedor:'302 694 559', armario:'3', cajon:'10', stock:5, sugerida:1, max:3, foto:null},
      { tipo:'INSERTO', sap:'66230000000664', descripcion:'Inserto especial Gühring', proveedor:'302 732 024', armario:'1', cajon:'5', stock:5, sugerida:2, max:6, foto:null},
    ]},
  { codigo:'40019', linea:'BLOCK', op:'OP40', motores:[], desc:'',
    piezas:[
      { tipo:'INSERTO', sap:'66230000000667', descripcion:'Ø5,6m7 - Ø8h7 x 89mm', proveedor:'302 694 563', armario:'3', cajon:'10', stock:2, sugerida:1, max:3, foto:null},
    ]},
  { codigo:'40020', linea:'BLOCK', op:'OP40', motores:[], desc:'',
    piezas:[
      { tipo:'PUNTA INTERC.', sap:'66230000000670', descripcion:'Ø27h7 x 22mm', proveedor:'333 099 358', armario:'1', cajon:'5', stock:3, sugerida:1, max:3, foto:null},
      { tipo:'INSERTO', sap:'66230000000671', descripcion:'CCHX 060204 R112', proveedor:'6685-62,040', armario:'1', cajon:'5', stock:2, sugerida:2, max:6, foto:null},
      { tipo:'INSERTO', sap:'66230000000672', descripcion:'W2006-04141000L G16', proveedor:'20479-20,062', armario:'1', cajon:'5', stock:2, sugerida:2, max:6, foto:null},
    ]},
  { codigo:'40021', linea:'BLOCK', op:'OP40', motores:[], desc:'',
    piezas:[
      { tipo:'HPR', sap:'66230000000673', descripcion:'Ø28N9', proveedor:'30219161', armario:'2', cajon:'8', stock:2, sugerida:1, max:3, foto:null},
    ]},
  { codigo:'40022', linea:'BLOCK', op:'OP40', motores:[], desc:'',
    piezas:[
      { tipo:'MECHA', sap:'66230000000675', descripcion:'Ø17,5m7  - Ø20,5 x 100mm', proveedor:'302 734 827', armario:'3', cajon:'10', stock:5, sugerida:1, max:2, foto:null, stockAfilado:3},
    ]},
  { codigo:'40023', linea:'BLOCK', op:'OP40', motores:[], desc:'',
    piezas:[
      { tipo:'INSERTO', sap:'66230000000678', descripcion:'DZ92R6W2-HC417', proveedor:'DZ92R6W2', armario:'2', cajon:'4', stock:2, sugerida:1, max:3, foto:null},
    ]},
  { codigo:'40024', linea:'BLOCK', op:'OP40', motores:[], desc:'',
    piezas:[
      { tipo:'INSERTO', sap:'66230000000680', descripcion:'CDA323R181 IN80B', proveedor:'5853495', armario:'1', cajon:'2', stock:16, sugerida:14, max:42, foto:null},
    ]},
  { codigo:'40025', linea:'BLOCK', op:'OP40', motores:[], desc:'',
    piezas:[
      { tipo:'INSERTO', sap:'66230000000064', descripcion:'RCMT 10T3M0-PM5-WAK10', proveedor:'10105482 - 30961223', armario:'2', cajon:'1', stock:6, sugerida:3, max:9, foto:null},
    ]},
  { codigo:'40026', linea:'BLOCK', op:'OP40', motores:[], desc:'',
    piezas:[
      { tipo:'MECHA', sap:'66230000000685', descripcion:'Ø16m7 x 185mm', proveedor:'302 694 564', armario:'4', cajon:'1', stock:3, sugerida:1, max:2, foto:null, stockAfilado:1},
    ]},
  { codigo:'40027', linea:'BLOCK', op:'OP40', motores:[], desc:'',
    piezas:[
      { tipo:'MECHA', sap:'66230000000686', descripcion:'Ø11 - Ø15h7 x 305mm', proveedor:'302 694 557', armario:'4', cajon:'1', stock:1, sugerida:1, max:2, foto:null, stockAfilado:1},
    ]},
  { codigo:'40028', linea:'BLOCK', op:'OP40', motores:[], desc:'',
    piezas:[
      { tipo:'MECHA', sap:'66230000000687', descripcion:'Ø18,8 - Ø19,3m7 - Ø25 x 178mm', proveedor:'302 694 558', armario:'4', cajon:'1', stock:3, sugerida:1, max:2, foto:null, stockAfilado:2},
    ]},
  { codigo:'40029', linea:'BLOCK', op:'OP40', motores:[], desc:'',
    piezas:[
      { tipo:'HPR', sap:'66230000000688', descripcion:'Ø19,7H7', proveedor:'30477247', armario:'2', cajon:'8', stock:1, sugerida:1, max:3, foto:null},
    ]},
  { codigo:'40030', linea:'BLOCK', op:'OP40', motores:[], desc:'',
    piezas:[
      { tipo:'INSERTO', sap:'66230000000690', descripcion:'CCHT 060202 E04L-1J-HP455', proveedor:'30259659 - 31228932', armario:'2', cajon:'4', stock:3, sugerida:3, max:9, foto:null},
    ]},
  { codigo:'40031', linea:'BLOCK', op:'OP40', motores:[], desc:'',
    piezas:[
      { tipo:'MECHA', sap:'66230000000691', descripcion:'Ø10m7 x 105mm', proveedor:'302 694 552', armario:'4', cajon:'1', stock:2, sugerida:1, max:2, foto:null, stockAfilado:1},
    ]},
  { codigo:'40032', linea:'BLOCK', op:'OP40', motores:[], desc:'',
    piezas:[
      { tipo:'MECHA', sap:'66230000000324', descripcion:'Ø10 h7 x 221mm', proveedor:'6509-10,00', armario:'1', cajon:'7', stock:1, sugerida:1, max:2, foto:null, stockAfilado:1},
    ]},
  { codigo:'40033', linea:'BLOCK', op:'OP40', motores:[], desc:'',
    piezas:[
      { tipo:'INSERTO', sap:'66230000001123', descripcion:'T490 LNMT 1306PNTR IC810', proveedor:'5605882', armario:'1', cajon:'3', stock:9, sugerida:8, max:24, foto:null},
    ]},
  { codigo:'40034', linea:'BLOCK', op:'OP40', motores:[], desc:'',
    piezas:[
      { tipo:'MECHA', sap:'66230000000692', descripcion:'Ø16,5 - Ø18 x 120mm', proveedor:'302 694 553', armario:'4', cajon:'1', stock:5, sugerida:1, max:2, foto:null, stockAfilado:3},
    ]},
  { codigo:'40036', linea:'BLOCK', op:'OP40', motores:[], desc:'',
    piezas:[
      { tipo:'MECHA', sap:'66230000000695', descripcion:'Ø26m7 - Ø28m7 - 30,4 h7 x 169mm', proveedor:'302 694 548', armario:'4', cajon:'1', stock:1, sugerida:1, max:2, foto:null, stockAfilado:2},
    ]},
  { codigo:'40037', linea:'BLOCK', op:'OP40', motores:[], desc:'',
    piezas:[
      { tipo:'FRESA ROSCADO', sap:'66230000000697', descripcion:'Ø19,95 x 105mm', proveedor:'302 693 915', armario:'4', cajon:'1', stock:2, sugerida:1, max:3, foto:null},
    ]},
  { codigo:'40038', linea:'BLOCK', op:'OP40', motores:[], desc:'',
    piezas:[
      { tipo:'MECHA', sap:'66230000000699', descripcion:'Ø10m7 - Ø11,45m7 x 107mm', proveedor:'302 694 555', armario:'4', cajon:'1', stock:1, sugerida:1, max:2, foto:null, stockAfilado:2},
      { tipo:'INSERTO', sap:'66230000000700', descripcion:'Inserto especial Gühring', proveedor:'302 732 025', armario:'1', cajon:'5', stock:2, sugerida:2, max:6, foto:null},
    ]},
  { codigo:'40039', linea:'BLOCK', op:'OP40', motores:[], desc:'',
    piezas:[
      { tipo:'MECHA', sap:'66230000000703', descripcion:'Ø16m7 - Ø17,5m7 - 25 x 130mm', proveedor:'302 694 549', armario:'4', cajon:'1', stock:2, sugerida:1, max:2, foto:null, stockAfilado:3},
    ]},
  { codigo:'40040', linea:'BLOCK', op:'OP40', motores:[], desc:'',
    piezas:[
      { tipo:'MACHO', sap:'66230000000704', descripcion:'RP 1/4 -19 x 100mm', proveedor:'302 684 211', armario:'4', cajon:'1', stock:1, sugerida:1, max:3, foto:null},
    ]},
  { codigo:'40041', linea:'BLOCK', op:'OP40', motores:[], desc:'',
    piezas:[
      { tipo:'MECHA', sap:'66230000000660', descripcion:'Ø10 h7 x 321mm', proveedor:'6512-10,00', armario:'1', cajon:'7', stock:3, sugerida:1, max:2, foto:null, stockAfilado:1},
    ]},
  { codigo:'40042', linea:'BLOCK', op:'OP40', motores:[], desc:'',
    piezas:[
      { tipo:'HPR', sap:'66230000000705', descripcion:'Ø18 H7', proveedor:'30118129', armario:'2', cajon:'8', stock:3, sugerida:1, max:3, foto:null},
    ]},
  { codigo:'40043', linea:'BLOCK', op:'OP40', motores:[], desc:'',
    piezas:[
      { tipo:'MECHA', sap:'66230000000707', descripcion:'Ø5m7 - Ø7 - Ø8m7 x 80mm', proveedor:'302 694 550', armario:'4', cajon:'1', stock:2, sugerida:1, max:2, foto:null, stockAfilado:0},
    ]},
  { codigo:'40044', linea:'BLOCK', op:'OP40', motores:[], desc:'',
    piezas:[
      { tipo:'MACHO', sap:'66230000000424', descripcion:'M6 x 1 x 80mm', proveedor:'318-6,000', armario:'1', cajon:'6', stock:3, sugerida:1, max:3, foto:null},
    ]},
  { codigo:'40045', linea:'BLOCK', op:'OP40', motores:[], desc:'',
    piezas:[
      { tipo:'MECHA', sap:'66230000000708', descripcion:'Ø8h6  x 51mm', proveedor:'302 694 554', armario:'4', cajon:'2', stock:1, sugerida:1, max:2, foto:null, stockAfilado:0},
      { tipo:'INSERTO', sap:'66230000000709', descripcion:'TP10G 083005 LC610 I', proveedor:'333 030 363', armario:'1', cajon:'5', stock:5, sugerida:2, max:6, foto:null},
    ]},
  { codigo:'40046', linea:'BLOCK', op:'OP40', motores:[], desc:'',
    piezas:[
      { tipo:'MECHA', sap:'66230000000712', descripcion:'Ø10m7 - Ø10,8m7 - Ø12,4m7 x 137mm', proveedor:'302 694 556', armario:'4', cajon:'2', stock:2, sugerida:1, max:2, foto:null, stockAfilado:1},
    ]},
  { codigo:'40047', linea:'BLOCK', op:'OP40', motores:[], desc:'',
    piezas:[
      { tipo:'MACHO', sap:'66230000000714', descripcion:'M12 x 1,25 x 140mm', proveedor:'302 693 917', armario:'4', cajon:'2', stock:4, sugerida:1, max:3, foto:null},
    ]},
  { codigo:'40048', linea:'BLOCK', op:'OP40', motores:[], desc:'',
    piezas:[
      { tipo:'MECHA', sap:'66230000000716', descripcion:'Ø16,5m7 - Ø18,4m7 x 152mm', proveedor:'302 694 551', armario:'4', cajon:'2', stock:5, sugerida:1, max:2, foto:null, stockAfilado:2},
    ]},
  { codigo:'40049', linea:'BLOCK', op:'OP40', motores:[], desc:'',
    piezas:[
      { tipo:'MACHO', sap:'66230000000718', descripcion:'M18 x 1,5 x 110mm', proveedor:'302 693 919', armario:'4', cajon:'2', stock:4, sugerida:1, max:3, foto:null},
    ]},
  { codigo:'40050', linea:'BLOCK', op:'OP40', motores:[], desc:'',
    piezas:[
      { tipo:'INSERTO', sap:'66230000000456', descripcion:'BOMT09T308R IN2505', proveedor:'5812698', armario:'1', cajon:'2', stock:8, sugerida:8, max:24, foto:null},
    ]},
  { codigo:'40051', linea:'BLOCK', op:'OP40', motores:[], desc:'',
    piezas:[
      { tipo:'INSERTO', sap:'66230000000214', descripcion:'SZ92R6W-HC416', proveedor:'30914877', armario:'2', cajon:'2', stock:3, sugerida:1, max:3, foto:null},
    ]},
  { codigo:'40052', linea:'BLOCK', op:'OP40', motores:[], desc:'',
    piezas:[
      { tipo:'INSERTO', sap:'66230000000456', descripcion:'BOMT09T308R IN2505', proveedor:'5812698', armario:'1', cajon:'2', stock:8, sugerida:7, max:21, foto:null},
    ]},
  { codigo:'40053', linea:'BLOCK', op:'OP40', motores:[], desc:'',
    piezas:[
      { tipo:'MECHA', sap:'66230000001487', descripcion:'Ø6,8m7 - Ø10h7 x 89mm', proveedor:'B976AS6579352 KC7315', armario:'1', cajon:'4', stock:3, sugerida:1, max:2, foto:null, stockAfilado:2},
    ]},
  { codigo:'40054', linea:'BLOCK', op:'OP40', motores:[], desc:'',
    piezas:[
      { tipo:'MACHO', sap:'66230000001205', descripcion:'M8 x 1,25 x 90mm', proveedor:'2506-8,00', armario:'1', cajon:'6', stock:2, sugerida:1, max:3, foto:null},
    ]},
  { codigo:'40055', linea:'BLOCK', op:'OP40', motores:[], desc:'',
    piezas:[
      { tipo:'INSERTO', sap:'66230000001473', descripcion:'DFT 030304HP KCU25', proveedor:'5067402', armario:'1', cajon:'4', stock:1, sugerida:1, max:3, foto:null},
      { tipo:'INSERTO', sap:'66230000001474', descripcion:'SPGX 060304RHP KCU25', proveedor:'5534253', armario:'1', cajon:'4', stock:4, sugerida:1, max:3, foto:null},
    ]},
  { codigo:'40056', linea:'BLOCK', op:'OP40', motores:[], desc:'',
    piezas:[
      { tipo:'MECHA', sap:'66230000001486', descripcion:'Ø16k6 - Ø25h6 x 143,2mm', proveedor:'B410ES6611731', armario:'1', cajon:'4', stock:4, sugerida:1, max:2, foto:null, stockAfilado:0},
    ]},
  { codigo:'40057', linea:'BLOCK', op:'OP40', motores:[], desc:'',
    piezas:[
      { tipo:'INSERTO', sap:'66230000001500', descripcion:'SOMT 09T306-DT IC908', proveedor:'5505240', armario:'1', cajon:'3', stock:6, sugerida:2, max:6, foto:null},
    ]},
  { codigo:'40058', linea:'BLOCK', op:'OP40', motores:[], desc:'',
    piezas:[
      { tipo:'MECHA', sap:'', descripcion:'', proveedor:'', armario:'', cajon:'', stock:5, sugerida:1, max:2, foto:null, stockAfilado:0},
    ]},
  { codigo:'40059', linea:'BLOCK', op:'OP40', motores:[], desc:'',
    piezas:[
      { tipo:'MACHO', sap:'66230000000718', descripcion:'M18 x 1,5 x 110mm', proveedor:'302 693 919', armario:'4', cajon:'2', stock:4, sugerida:1, max:3, foto:null},
    ]},
  { codigo:'40060', linea:'BLOCK', op:'OP40', motores:[], desc:'',
    piezas:[
      { tipo:'MECHA', sap:'66230000001327', descripcion:'Ø15m7 - 17,5m7 - 18 x 172mm', proveedor:'303 540 608', armario:'5', cajon:'8', stock:1, sugerida:1, max:2, foto:null, stockAfilado:1},
    ]},
  { codigo:'40061', linea:'BLOCK', op:'OP40', motores:[], desc:'',
    piezas:[
      { tipo:'MACHO', sap:'66230000001318', descripcion:'M17 x2 x 130mm', proveedor:'303 540 470', armario:'5', cajon:'8', stock:3, sugerida:1, max:3, foto:null},
    ]},
  { codigo:'70001', linea:'BLOCK', op:'OP70', motores:[], desc:'',
    piezas:[
      { tipo:'ESCARIADOR', sap:'66230000000721', descripcion:'Ø14R8 x225mm', proveedor:'30476678', armario:'2', cajon:'10', stock:3, sugerida:1, max:3, foto:null},
    ]},
  { codigo:'70002', linea:'BLOCK', op:'OP70', motores:[], desc:'',
    piezas:[
      { tipo:'INSERTO', sap:'66230000000723', descripcion:'CCHX 060204L 112', proveedor:'6686-62,040', armario:'1', cajon:'6', stock:2, sugerida:1, max:3, foto:null},
    ]},
  { codigo:'70003', linea:'BLOCK', op:'OP70', motores:[], desc:'',
    piezas:[
      { tipo:'INSERTO', sap:'66230000000678', descripcion:'DZ92R6W2-HC417', proveedor:'DZ92R6W2', armario:'2', cajon:'4', stock:1, sugerida:1, max:3, foto:null},
    ]},
  { codigo:'70005', linea:'BLOCK', op:'OP70', motores:[], desc:'',
    piezas:[
      { tipo:'INSERTO', sap:'66230000000077', descripcion:'SCHT 09T304 E04L-2J-HP455', proveedor:'30222135 - 30679973', armario:'2', cajon:'1', stock:6, sugerida:2, max:6, foto:null},
    ]},
  { codigo:'70006', linea:'BLOCK', op:'OP70', motores:[], desc:'',
    piezas:[
      { tipo:'PUNTA INTERC.', sap:'66230000000481', descripcion:'Ø25m7 - 15,8mm', proveedor:'4113-25,00', armario:'3', cajon:'8', stock:1, sugerida:1, max:3, foto:null},
    ]},
  { codigo:'70007', linea:'BLOCK', op:'OP70', motores:[], desc:'',
    piezas:[
      { tipo:'MECHA', sap:'66230000000729', descripcion:'Ø21,5m7 - Ø25 x 95mm', proveedor:'302 684 187', armario:'4', cajon:'2', stock:2, sugerida:1, max:2, foto:null, stockAfilado:3},
    ]},
  { codigo:'70008', linea:'BLOCK', op:'OP70', motores:[], desc:'',
    piezas:[
      { tipo:'HPR', sap:'66230000000933', descripcion:'Ø22N9-HC413', proveedor:'30219157', armario:'2', cajon:'8', stock:2, sugerida:1, max:3, foto:null},
    ]},
  { codigo:'70009', linea:'BLOCK', op:'OP70', motores:[], desc:'',
    piezas:[
      { tipo:'MECHA', sap:'66230000000732', descripcion:'Ø10,2m7 - Ø13m7 x 110mm', proveedor:'302 684 189', armario:'4', cajon:'2', stock:1, sugerida:1, max:2, foto:null, stockAfilado:2},
    ]},
  { codigo:'70010', linea:'BLOCK', op:'OP70', motores:[], desc:'',
    piezas:[
      { tipo:'MECHA', sap:'66230000000733', descripcion:'Ø10,2m7 - Ø14m7 x 100mm', proveedor:'302 684 190', armario:'4', cajon:'2', stock:3, sugerida:1, max:2, foto:null, stockAfilado:1},
    ]},
  { codigo:'70011', linea:'BLOCK', op:'OP70', motores:[], desc:'',
    piezas:[
      { tipo:'MECHA', sap:'66230000000734', descripcion:'Ø10,2m7 - Ø14m7 x 105mm', proveedor:'302 684 191', armario:'4', cajon:'2', stock:2, sugerida:1, max:2, foto:null, stockAfilado:2},
    ]},
  { codigo:'70012', linea:'BLOCK', op:'OP70', motores:[], desc:'',
    piezas:[
      { tipo:'MECHA', sap:'66230000000735', descripcion:'Ø16m7 - Ø19 - Ø20m7 x 145mm', proveedor:'302 684 192', armario:'4', cajon:'2', stock:4, sugerida:1, max:2, foto:null, stockAfilado:1},
    ]},
  { codigo:'70013', linea:'BLOCK', op:'OP70', motores:[], desc:'',
    piezas:[
      { tipo:'MECHA', sap:'66230000000736', descripcion:'Ø16m7 - Ø19 - Ø20m7 x 132mm', proveedor:'302 692 360', armario:'4', cajon:'3', stock:2, sugerida:1, max:2, foto:null, stockAfilado:3},
    ]},
  { codigo:'70014', linea:'BLOCK', op:'OP70', motores:[], desc:'',
    piezas:[
      { tipo:'MACHO', sap:'66230000000737', descripcion:'M18 x2 x 125mm', proveedor:'302 684 193', armario:'4', cajon:'3', stock:4, sugerida:1, max:3, foto:null},
    ]},
  { codigo:'70015', linea:'BLOCK', op:'OP70', motores:[], desc:'',
    piezas:[
      { tipo:'INSERTO', sap:'66230000000046', descripcion:'SPHT 060304 E04X-1L-HC725', proveedor:'30320829 - 30679992', armario:'2', cajon:'1', stock:1, sugerida:1, max:3, foto:null},
      { tipo:'INSERTO', sap:'66230000000054', descripcion:'CCHT 09T304 E04L-1L-HP455', proveedor:'30229239 - 30454738', armario:'2', cajon:'1', stock:3, sugerida:2, max:6, foto:null},
    ]},
  { codigo:'70016', linea:'BLOCK', op:'OP70', motores:[], desc:'',
    piezas:[
      { tipo:'HPR', sap:'66230000000742', descripcion:'HPR Ø28N9 MX606-1G-HC413', proveedor:'30477243 - 30477248', armario:'2', cajon:'8', stock:1, sugerida:1, max:3, foto:null},
    ]},
  { codigo:'70017', linea:'BLOCK', op:'OP70', motores:[], desc:'',
    piezas:[
      { tipo:'INSERTO', sap:'66230000000076', descripcion:'CCHT 09T308 E04L-1L-HC725', proveedor:'30679940 - 30950291', armario:'2', cajon:'1', stock:7, sugerida:3, max:9, foto:null},
      { tipo:'INSERTO', sap:'66230000000912', descripcion:'STHD 0603300 D02N-HP455', proveedor:'30209349', armario:'2', cajon:'4', stock:3, sugerida:1, max:3, foto:null},
    ]},
  { codigo:'70018', linea:'BLOCK', op:'OP70', motores:[], desc:'',
    piezas:[
      { tipo:'INSERTO', sap:'66230000000750', descripcion:'CTHQ 090508 A54L10B041-HP455', proveedor:'30231307', armario:'2', cajon:'4', stock:9, sugerida:5, max:15, foto:null},
    ]},
  { codigo:'70019', linea:'BLOCK', op:'OP70', motores:[], desc:'',
    piezas:[
      { tipo:'INSERTO', sap:'66230000000761', descripcion:'DGM314L001 IN2005', proveedor:'5830732', armario:'1', cajon:'2', stock:11, sugerida:8, max:24, foto:null},
      { tipo:'INSERTO', sap:'66230000000762', descripcion:'DGM212R101 K IN2505', proveedor:'5850378', armario:'1', cajon:'2', stock:10, sugerida:8, max:24, foto:null},
      { tipo:'INSERTO', sap:'66230000000302', descripcion:'DGM314R001 K IN2005', proveedor:'5812314', armario:'1', cajon:'1', stock:8, sugerida:8, max:24, foto:null},
    ]},
  { codigo:'70020', linea:'BLOCK', op:'OP70', motores:[], desc:'',
    piezas:[
      { tipo:'INSERTO', sap:'66230000000750', descripcion:'CTHQ 090508 A54L10B041-HP455', proveedor:'30231307', armario:'2', cajon:'4', stock:8, sugerida:5, max:15, foto:null},
    ]},
  { codigo:'70021', linea:'BLOCK', op:'OP70', motores:[], desc:'',
    piezas:[
      { tipo:'MECHA', sap:'66230000000757', descripcion:'Ø6,8m7 - Ø9 - Ø10m7 x 90mm', proveedor:'302 684 194', armario:'4', cajon:'3', stock:5, sugerida:1, max:2, foto:null, stockAfilado:3},
    ]},
  { codigo:'70022', linea:'BLOCK', op:'OP70', motores:[], desc:'',
    piezas:[
      { tipo:'MECHA', sap:'66230000000758', descripcion:'Ø7m7 x 60mm', proveedor:'302 684 195', armario:'4', cajon:'3', stock:3, sugerida:1, max:2, foto:null, stockAfilado:3},
    ]},
  { codigo:'70023', linea:'BLOCK', op:'OP70', motores:[], desc:'',
    piezas:[
      { tipo:'MECHA', sap:'66230000000759', descripcion:'Ø6,8m7 - Ø8 x 82mm', proveedor:'302 684 196', armario:'4', cajon:'3', stock:3, sugerida:1, max:2, foto:null, stockAfilado:1},
    ]},
  { codigo:'70024', linea:'BLOCK', op:'OP70', motores:[], desc:'',
    piezas:[
      { tipo:'INSERTO', sap:'66230000000761', descripcion:'DGM314L001 IN2005', proveedor:'5830732', armario:'1', cajon:'2', stock:12, sugerida:10, max:30, foto:null},
      { tipo:'INSERTO', sap:'66230000000762', descripcion:'DGM212R101 K IN2505', proveedor:'5850378', armario:'1', cajon:'2', stock:9, sugerida:5, max:15, foto:null},
    ]},
  { codigo:'70025', linea:'BLOCK', op:'OP70', motores:[], desc:'',
    piezas:[
      { tipo:'INSERTO', sap:'66230000000761', descripcion:'DGM314L001 IN2005', proveedor:'5830732', armario:'1', cajon:'2', stock:11, sugerida:10, max:30, foto:null},
    ]},
  { codigo:'70026', linea:'BLOCK', op:'OP70', motores:[], desc:'',
    piezas:[
      { tipo:'MECHA', sap:'66230000000764', descripcion:'Ø10,2m7 - Ø13m7 x 118mm', proveedor:'302 684 197', armario:'4', cajon:'3', stock:5, sugerida:1, max:2, foto:null, stockAfilado:1},
    ]},
  { codigo:'70027', linea:'BLOCK', op:'OP70', motores:[], desc:'',
    piezas:[
      { tipo:'MECHA', sap:'66230000000765', descripcion:'Ø10,2m7 - Ø14h7 x 100mm', proveedor:'302 684 198', armario:'4', cajon:'3', stock:1, sugerida:1, max:2, foto:null, stockAfilado:2},
    ]},
  { codigo:'70028', linea:'BLOCK', op:'OP70', motores:[], desc:'',
    piezas:[
      { tipo:'MECHA', sap:'66230000000766', descripcion:'Ø6,8m7 - Ø10m7 x 89mm', proveedor:'302 684 199', armario:'4', cajon:'3', stock:2, sugerida:1, max:2, foto:null, stockAfilado:2},
    ]},
  { codigo:'70029', linea:'BLOCK', op:'OP70', motores:[], desc:'',
    piezas:[
      { tipo:'MECHA', sap:'66230000000767', descripcion:'Ø6,8m7 - Ø11,5m7 - Ø14 x 100mm', proveedor:'302 684 200', armario:'4', cajon:'3', stock:3, sugerida:1, max:2, foto:null, stockAfilado:2},
    ]},
  { codigo:'70030', linea:'BLOCK', op:'OP70', motores:[], desc:'',
    piezas:[
      { tipo:'MECHA', sap:'66230000000768', descripcion:'Ø16m7 x 120mm', proveedor:'302 727 216', armario:'4', cajon:'3', stock:3, sugerida:1, max:2, foto:null, stockAfilado:0},
    ]},
  { codigo:'70031', linea:'BLOCK', op:'OP70', motores:[], desc:'',
    piezas:[
      { tipo:'MECHA', sap:'66230000000769', descripcion:'Ø8m7 - Ø9,5m7 - Ø12 x 115mm', proveedor:'302 684 202', armario:'4', cajon:'3', stock:5, sugerida:1, max:2, foto:null, stockAfilado:0},
    ]},
  { codigo:'70032', linea:'BLOCK', op:'OP70', motores:[], desc:'',
    piezas:[
      { tipo:'ESCARIADOR', sap:'66230000000770', descripcion:'Ø10R8 x 85mm', proveedor:'30476681', armario:'2', cajon:'9', stock:3, sugerida:1, max:3, foto:null},
    ]},
  { codigo:'70033', linea:'BLOCK', op:'OP70', motores:[], desc:'',
    piezas:[
      { tipo:'MECHA', sap:'66230000000780', descripcion:'Ø11,6m7 - Ø14 x 100mm', proveedor:'302 684 204', armario:'4', cajon:'3', stock:2, sugerida:1, max:2, foto:null, stockAfilado:3},
    ]},
  { codigo:'70034', linea:'BLOCK', op:'OP70', motores:[], desc:'',
    piezas:[
      { tipo:'MECHA', sap:'66230000000781', descripcion:'Ø11,6m7 - Ø14 x 80mm', proveedor:'302 684 201', armario:'4', cajon:'3', stock:3, sugerida:1, max:2, foto:null, stockAfilado:1},
    ]},
  { codigo:'70035', linea:'BLOCK', op:'OP70', motores:[], desc:'',
    piezas:[
      { tipo:'MECHA', sap:'66230000000782', descripcion:'Ø23,5m7 - Ø28 x 120mm', proveedor:'302 684 205', armario:'4', cajon:'3', stock:5, sugerida:1, max:2, foto:null, stockAfilado:3},
    ]},
  { codigo:'70037', linea:'BLOCK', op:'OP70', motores:[], desc:'',
    piezas:[
      { tipo:'MACHO', sap:'66230000001205', descripcion:'M8 x 1,25 x 90mm', proveedor:'2506-8,00', armario:'1', cajon:'6', stock:4, sugerida:1, max:3, foto:null},
    ]},
  { codigo:'70038', linea:'BLOCK', op:'OP70', motores:[], desc:'',
    piezas:[
      { tipo:'MACHO', sap:'66230000001241', descripcion:'M12 x 1,75 x 110mm', proveedor:'1883-12,00', armario:'1', cajon:'6', stock:4, sugerida:1, max:3, foto:null},
    ]},
  { codigo:'70039', linea:'BLOCK', op:'OP70', motores:[], desc:'',
    piezas:[
      { tipo:'INSERTO', sap:'66230000000456', descripcion:'BOMT09T308R IN2505', proveedor:'5812698', armario:'1', cajon:'2', stock:8, sugerida:8, max:24, foto:null},
    ]},
  { codigo:'70040', linea:'BLOCK', op:'OP70', motores:[], desc:'',
    piezas:[
      { tipo:'INSERTO', sap:'66230000000785', descripcion:'CCHT 120410 E04L-1L-HC725', proveedor:'30494624', armario:'2', cajon:'4', stock:7, sugerida:3, max:9, foto:null},
    ]},
  { codigo:'70041', linea:'BLOCK', op:'OP70', motores:[], desc:'',
    piezas:[
      { tipo:'MECHA', sap:'66230000000786', descripcion:'Ø10,2m7 - Ø13,07m7 x 120mm', proveedor:'302 698 820', armario:'4', cajon:'4', stock:3, sugerida:1, max:2, foto:null, stockAfilado:3},
    ]},
  { codigo:'70042', linea:'BLOCK', op:'OP70', motores:[], desc:'',
    piezas:[
      { tipo:'MECHA', sap:'66230000001038', descripcion:'Ø6,8m7 - Ø10 x 80mm', proveedor:'302 698 828', armario:'4', cajon:'4', stock:3, sugerida:1, max:2, foto:null, stockAfilado:1},
    ]},
  { codigo:'70043', linea:'BLOCK', op:'OP70', motores:[], desc:'',
    piezas:[
      { tipo:'MECHA', sap:'66230000000787', descripcion:'Ø6,8m7 - Ø10 x 80mm', proveedor:'302 698 829', armario:'4', cajon:'4', stock:4, sugerida:1, max:2, foto:null, stockAfilado:0},
    ]},
  { codigo:'70044', linea:'BLOCK', op:'OP70', motores:[], desc:'',
    piezas:[
      { tipo:'MECHA', sap:'66230000000788', descripcion:'Ø6,7m7 - Ø10 x 90mm', proveedor:'302 698 821', armario:'4', cajon:'4', stock:3, sugerida:1, max:2, foto:null, stockAfilado:2},
    ]},
  { codigo:'70045', linea:'BLOCK', op:'OP70', motores:[], desc:'',
    piezas:[
      { tipo:'MECHA', sap:'66230000000789', descripcion:'Ø6,7h7 - Ø8,56h7 - Ø12m7 x 120mm', proveedor:'302 698 822', armario:'4', cajon:'4', stock:2, sugerida:1, max:2, foto:null, stockAfilado:0},
    ]},
  { codigo:'70046', linea:'BLOCK', op:'OP70', motores:[], desc:'',
    piezas:[
      { tipo:'MACHO', sap:'66230000000790', descripcion:'RP 1/8\" x 90mm', proveedor:'302 693 921', armario:'4', cajon:'4', stock:2, sugerida:1, max:3, foto:null},
    ]},
  { codigo:'70047', linea:'BLOCK', op:'OP70', motores:[], desc:'',
    piezas:[
      { tipo:'MECHA', sap:'66230000000791', descripcion:'Ø3,5 - Ø6,7h7 x 80mm', proveedor:'302 698 824', armario:'4', cajon:'4', stock:2, sugerida:1, max:2, foto:null, stockAfilado:3},
    ]},
  { codigo:'70048', linea:'BLOCK', op:'OP70', motores:[], desc:'',
    piezas:[
      { tipo:'MECHA', sap:'66230000000792', descripcion:'Ø6,8m7 - Ø10h7 x 89mm', proveedor:'302 698 827', armario:'4', cajon:'4', stock:5, sugerida:1, max:2, foto:null, stockAfilado:3},
    ]},
  { codigo:'70049', linea:'BLOCK', op:'OP70', motores:[], desc:'',
    piezas:[
      { tipo:'MECHA', sap:'66230000000793', descripcion:'Ø6,8m7 - Ø9 - Ø11,6m7 x 95mm', proveedor:'302 698 823', armario:'4', cajon:'4', stock:1, sugerida:1, max:2, foto:null, stockAfilado:1},
    ]},
  { codigo:'70050', linea:'BLOCK', op:'OP70', motores:[], desc:'',
    piezas:[
      { tipo:'MECHA', sap:'66230000000794', descripcion:'Ø10m7 - Ø10,5m7 - Ø12m7 x 80mm', proveedor:'302 698 830', armario:'4', cajon:'4', stock:4, sugerida:1, max:2, foto:null, stockAfilado:2},
    ]},
  { codigo:'70051', linea:'BLOCK', op:'OP70', motores:[], desc:'',
    piezas:[
      { tipo:'MACHO', sap:'66230000001206', descripcion:'M10 x 1,5 x 100mm', proveedor:'2506-10,00', armario:'1', cajon:'6', stock:1, sugerida:1, max:3, foto:null},
    ]},
  { codigo:'70052', linea:'BLOCK', op:'OP70', motores:[], desc:'',
    piezas:[
      { tipo:'MECHA', sap:'', descripcion:'Ø8,5m7 - 13,7m7 - Ø16 x 96mm', proveedor:'304 279 653', armario:'', cajon:'', stock:3, sugerida:1, max:2, foto:null, stockAfilado:0},
    ]},
  { codigo:'70053', linea:'BLOCK', op:'OP70', motores:[], desc:'',
    piezas:[
      { tipo:'ESCARIADOR', sap:'66230000000149', descripcion:'Ø14 x 130mm', proveedor:'302 700 117', armario:'3', cajon:'2', stock:2, sugerida:1, max:3, foto:null},
    ]},
  { codigo:'70054', linea:'BLOCK', op:'OP70', motores:[], desc:'',
    piezas:[
      { tipo:'MECHA', sap:'66230000000151', descripcion:'Ø8,5m7 - 12 x 116mm', proveedor:'302 685 342', armario:'3', cajon:'2', stock:2, sugerida:1, max:2, foto:null, stockAfilado:3},
    ]},
  { codigo:'70055', linea:'BLOCK', op:'OP70', motores:[], desc:'',
    piezas:[
      { tipo:'MECHA', sap:'66230000000797', descripcion:'Ø11,6m7 - Ø14 x 95mm', proveedor:'302 698 825', armario:'4', cajon:'4', stock:5, sugerida:1, max:2, foto:null, stockAfilado:1},
    ]},
  { codigo:'70056', linea:'BLOCK', op:'OP70', motores:[], desc:'',
    piezas:[
      { tipo:'INSERTO', sap:'66230000000750', descripcion:'CTHQ 090508 A54L10B041-HP455', proveedor:'30231307', armario:'2', cajon:'4', stock:6, sugerida:5, max:15, foto:null},
    ]},
  { codigo:'70057', linea:'BLOCK', op:'OP70', motores:[], desc:'',
    piezas:[
      { tipo:'INSERTO', sap:'66230000000761', descripcion:'DGM314L001 IN2005', proveedor:'5830732', armario:'1', cajon:'2', stock:8, sugerida:8, max:24, foto:null},
      { tipo:'INSERTO', sap:'66230000000762', descripcion:'DGM212R101 K IN2505', proveedor:'5850378', armario:'1', cajon:'2', stock:10, sugerida:8, max:24, foto:null},
      { tipo:'INSERTO', sap:'66230000000302', descripcion:'DGM314R001 K IN2005', proveedor:'5812314', armario:'1', cajon:'1', stock:11, sugerida:8, max:24, foto:null},
    ]},
  { codigo:'70058', linea:'BLOCK', op:'OP70', motores:[], desc:'',
    piezas:[
      { tipo:'INSERTO', sap:'66230000000750', descripcion:'CTHQ 090508 A54L10B041-HP455', proveedor:'30231307', armario:'2', cajon:'4', stock:9, sugerida:5, max:15, foto:null},
    ]},
  { codigo:'70059', linea:'BLOCK', op:'OP70', motores:[], desc:'',
    piezas:[
      { tipo:'MECHA', sap:'66230000000806', descripcion:'Ø10m7 - Ø12 x 80mm', proveedor:'302 698 816', armario:'4', cajon:'4', stock:1, sugerida:1, max:2, foto:null, stockAfilado:1},
    ]},
  { codigo:'70060', linea:'BLOCK', op:'OP70', motores:[], desc:'',
    piezas:[
      { tipo:'MECHA', sap:'66230000000660', descripcion:'Ø10 h7 x 321mm', proveedor:'6512-10,00', armario:'1', cajon:'7', stock:1, sugerida:1, max:2, foto:null, stockAfilado:0},
    ]},
  { codigo:'70061', linea:'BLOCK', op:'OP70', motores:[], desc:'',
    piezas:[
      { tipo:'MECHA', sap:'66230000000807', descripcion:'Ø15m7 - Ø18 x 112mm', proveedor:'302 698 817', armario:'4', cajon:'4', stock:3, sugerida:1, max:2, foto:null, stockAfilado:0},
    ]},
  { codigo:'70062', linea:'BLOCK', op:'OP70', motores:[], desc:'',
    piezas:[
      { tipo:'INSERTO', sap:'66230000000041', descripcion:'SPHT 060304 E04L-2L-HC725', proveedor:'30217118 - 30679971', armario:'2', cajon:'1', stock:4, sugerida:1, max:3, foto:null},
      { tipo:'INSERTO', sap:'66230000000071', descripcion:'CCHT 060204 E04L-1J-HP455', proveedor:'30227070', armario:'2', cajon:'1', stock:5, sugerida:3, max:9, foto:null},
    ]},
  { codigo:'70063', linea:'BLOCK', op:'OP70', motores:[], desc:'',
    piezas:[
      { tipo:'MACHO', sap:'66230000001283', descripcion:'M16 x 2 x 160mm', proveedor:'302 693 920', armario:'4', cajon:'4', stock:4, sugerida:1, max:3, foto:null},
    ]},
  { codigo:'70064', linea:'BLOCK', op:'OP70', motores:[], desc:'',
    piezas:[
      { tipo:'MECHA', sap:'66230000000810', descripcion:'Ø10,2m7 - Ø14 x 107mm', proveedor:'302 698 819', armario:'4', cajon:'4', stock:4, sugerida:1, max:2, foto:null, stockAfilado:1},
    ]},
  { codigo:'70065', linea:'BLOCK', op:'OP70', motores:[], desc:'',
    piezas:[
      { tipo:'MACHO', sap:'66230000000811', descripcion:'M12 x 1,75 x 110mm', proveedor:'302 733 031', armario:'4', cajon:'5', stock:5, sugerida:1, max:3, foto:null},
    ]},
  { codigo:'70066', linea:'BLOCK', op:'OP70', motores:[], desc:'',
    piezas:[
      { tipo:'INSERTO', sap:'66230000000761', descripcion:'DGM314L001 IN2005', proveedor:'5830732', armario:'1', cajon:'2', stock:13, sugerida:10, max:30, foto:null},
    ]},
  { codigo:'70067', linea:'BLOCK', op:'OP70', motores:[], desc:'',
    piezas:[
      { tipo:'MECHA', sap:'66230000000625', descripcion:'Ø10,2m7 - Ø14 x 107mm', proveedor:'302 694 541', armario:'3', cajon:'9', stock:4, sugerida:1, max:2, foto:null, stockAfilado:0},
    ]},
  { codigo:'70068', linea:'BLOCK', op:'OP70', motores:[], desc:'',
    piezas:[
      { tipo:'MECHA', sap:'66230000001185', descripcion:'Ø8,5m7 – Ø12h7 x 100 mm', proveedor:'302 940 977', armario:'4', cajon:'5', stock:1, sugerida:1, max:2, foto:null, stockAfilado:1},
    ]},
  { codigo:'70069', linea:'BLOCK', op:'OP70', motores:[], desc:'',
    piezas:[
      { tipo:'MECHA', sap:'66230000001483', descripcion:'Ø6,7m7 - Ø12h7 x 118mm', proveedor:'B977AS6612549 KC7315', armario:'1', cajon:'4', stock:5, sugerida:1, max:2, foto:null, stockAfilado:3},
    ]},
  { codigo:'70070', linea:'BLOCK', op:'OP70', motores:[], desc:'',
    piezas:[
      { tipo:'MECHA', sap:'66230000000893', descripcion:'Ø12m7 - Ø16m7 x 113mm', proveedor:'302 694 569', armario:'4', cajon:'7', stock:5, sugerida:1, max:2, foto:null, stockAfilado:3},
    ]},
  { codigo:'70071', linea:'BLOCK', op:'OP70', motores:[], desc:'',
    piezas:[
      { tipo:'MACHO', sap:'66230000000894', descripcion:'M14 x 2 x 110mm', proveedor:'319-14,000', armario:'4', cajon:'7', stock:4, sugerida:1, max:3, foto:null},
    ]},
  { codigo:'70072', linea:'BLOCK', op:'OP70', motores:[], desc:'',
    piezas:[
      { tipo:'MECHA', sap:'66230000000693', descripcion:'Ø14h7 x 155mm', proveedor:'302 694 565', armario:'4', cajon:'1', stock:4, sugerida:1, max:2, foto:null, stockAfilado:0},
    ]},
  { codigo:'70074', linea:'BLOCK', op:'OP70', motores:[], desc:'',
    piezas:[
      { tipo:'INSERTO', sap:'66230000001375', descripcion:'W4090-04251000L', proveedor:'20460-40.901', armario:'5', cajon:'8', stock:8, sugerida:4, max:12, foto:null},
    ]},
  { codigo:'70076', linea:'BLOCK', op:'OP70', motores:[], desc:'',
    piezas:[
      { tipo:'INSERTO', sap:'66230000001313', descripcion:'SCMT09T308N', proveedor:'6239-93.080', armario:'5', cajon:'1', stock:3, sugerida:2, max:6, foto:null},
    ]},
  { codigo:'70077', linea:'BLOCK', op:'OP70', motores:[], desc:'',
    piezas:[
      { tipo:'MECHA', sap:'66230000001323', descripcion:'Ø23m7 - Ø25 x 123mm', proveedor:'303 539 841', armario:'5', cajon:'8', stock:5, sugerida:1, max:2, foto:null, stockAfilado:3},
    ]},
  { codigo:'70078', linea:'BLOCK', op:'OP70', motores:[], desc:'',
    piezas:[
      { tipo:'INSERTO', sap:'66230000001360', descripcion:'TCMT 16T308-SM IC5005', proveedor:'5509051', armario:'1', cajon:'3', stock:6, sugerida:2, max:6, foto:null},
    ]},
  { codigo:'70079', linea:'BLOCK', op:'OP70', motores:[], desc:'',
    piezas:[
      { tipo:'INSERTO', sap:'66230000001360', descripcion:'TCMT 16T308-SM IC5005', proveedor:'5509051', armario:'1', cajon:'3', stock:3, sugerida:2, max:6, foto:null},
    ]},
  { codigo:'70080', linea:'BLOCK', op:'OP70', motores:[], desc:'',
    piezas:[
      { tipo:'INSERTO', sap:'66230000001361', descripcion:'LNET 125504-TN IC910', proveedor:'5603114', armario:'1', cajon:'3', stock:11, sugerida:10, max:30, foto:null},
    ]},
  { codigo:'70100', linea:'BLOCK', op:'OP70', motores:[], desc:'',
    piezas:[
      { tipo:'MECHA', sap:'66230000001077', descripcion:'Ø13,7m7 - Ø14 x 209mm', proveedor:'302 812 265', armario:'4', cajon:'5', stock:5, sugerida:1, max:2, foto:null, stockAfilado:0},
    ]},
  { codigo:'70119', linea:'BLOCK', op:'OP70', motores:[], desc:'',
    piezas:[
      { tipo:'INSERTO', sap:'66230000000761', descripcion:'DGM314L001 IN2005', proveedor:'5830732', armario:'1', cajon:'2', stock:11, sugerida:8, max:24, foto:null},
      { tipo:'INSERTO', sap:'66230000000762', descripcion:'DGM212R101 K IN2505', proveedor:'5850378', armario:'1', cajon:'2', stock:11, sugerida:8, max:24, foto:null},
    ]},
  { codigo:'70199', linea:'BLOCK', op:'OP70', motores:[], desc:'',
    piezas:[
      { tipo:'INSERTO', sap:'66230000000376', descripcion:'OPDN53-100 IN70N', proveedor:'5868046', armario:'1', cajon:'1', stock:15, sugerida:12, max:36, foto:null},
      { tipo:'INSERTO', sap:'66230000000377', descripcion:'YWH454L101 IN80B', proveedor:'5202781', armario:'1', cajon:'1', stock:6, sugerida:2, max:6, foto:null},
    ]},
  { codigo:'80001', linea:'BLOCK', op:'OP80', motores:[], desc:'',
    piezas:[
      { tipo:'INSERTO', sap:'66230000001123', descripcion:'T490 LNMT 1306PNTR IC810', proveedor:'5605882', armario:'1', cajon:'3', stock:9, sugerida:6, max:18, foto:null},
    ]},
  { codigo:'80002', linea:'BLOCK', op:'OP80', motores:[], desc:'',
    piezas:[
      { tipo:'INSERTO', sap:'66230000000466', descripcion:'BOMT130408R IN2005', proveedor:'5872329', armario:'1', cajon:'2', stock:6, sugerida:4, max:12, foto:null},
    ]},
  { codigo:'80003', linea:'BLOCK', op:'OP80', motores:[], desc:'',
    piezas:[
      { tipo:'MECHA', sap:'66230000000815', descripcion:'Ø6,8m7 - Ø10m7 x 85mm', proveedor:'302 684 226', armario:'4', cajon:'5', stock:2, sugerida:1, max:2, foto:null, stockAfilado:2},
    ]},
  { codigo:'80004', linea:'BLOCK', op:'OP80', motores:[], desc:'',
    piezas:[
      { tipo:'INSERTO', sap:'66230000000762', descripcion:'DGM212R101 K IN2505', proveedor:'5850378', armario:'1', cajon:'2', stock:8, sugerida:6, max:18, foto:null},
    ]},
  { codigo:'80005', linea:'BLOCK', op:'OP80', motores:[], desc:'',
    piezas:[
      { tipo:'MECHA', sap:'66230000000817', descripcion:'Ø14m7 - Ø18m7 x 120mm', proveedor:'302 694 570', armario:'4', cajon:'5', stock:3, sugerida:1, max:2, foto:null, stockAfilado:3},
    ]},
  { codigo:'80006', linea:'BLOCK', op:'OP80', motores:[], desc:'',
    piezas:[
      { tipo:'MECHA', sap:'66230000000818', descripcion:'Ø16,5m7 - Ø18,4m7 x 120mm', proveedor:'302 684 228', armario:'4', cajon:'5', stock:2, sugerida:1, max:2, foto:null, stockAfilado:1},
    ]},
  { codigo:'80007', linea:'BLOCK', op:'OP80', motores:[], desc:'',
    piezas:[
      { tipo:'MECHA', sap:'66230000000825', descripcion:'Ø12m7 x 135mm', proveedor:'302 684 229', armario:'4', cajon:'5', stock:2, sugerida:1, max:2, foto:null, stockAfilado:1},
    ]},
  { codigo:'80008', linea:'BLOCK', op:'OP80', motores:[], desc:'',
    piezas:[
      { tipo:'MECHA', sap:'66230000000826', descripcion:'Ø8,5m7 - Ø11,5m7 - Ø14 x 100mm', proveedor:'302 684 230', armario:'4', cajon:'5', stock:1, sugerida:1, max:2, foto:null, stockAfilado:1},
    ]},
  { codigo:'80010', linea:'BLOCK', op:'OP80', motores:[], desc:'',
    piezas:[
      { tipo:'MECHA', sap:'66230000000827', descripcion:'Ø10m7 - Ø11,5m7 - Ø16 x 125mm', proveedor:'302 684 232', armario:'4', cajon:'5', stock:5, sugerida:1, max:2, foto:null, stockAfilado:2},
    ]},
  { codigo:'80011', linea:'BLOCK', op:'OP80', motores:[], desc:'',
    piezas:[
      { tipo:'MECHA', sap:'66230000000652', descripcion:'Ø10 h7 x 271mm', proveedor:'6511-10,00', armario:'1', cajon:'7', stock:4, sugerida:1, max:2, foto:null, stockAfilado:0},
    ]},
  { codigo:'80012', linea:'BLOCK', op:'OP80', motores:[], desc:'',
    piezas:[
      { tipo:'MECHA', sap:'66230000000828', descripcion:'Ø15m7 - Ø20 x 115mm', proveedor:'302 684 208', armario:'4', cajon:'5', stock:2, sugerida:1, max:2, foto:null, stockAfilado:2},
    ]},
  { codigo:'80013', linea:'BLOCK', op:'OP80', motores:[], desc:'',
    piezas:[
      { tipo:'MECHA', sap:'66230000001029', descripcion:'Ø15h7 x 355mm', proveedor:'302 684 152', armario:'1', cajon:'9', stock:2, sugerida:1, max:2, foto:null, stockAfilado:3},
    ]},
  { codigo:'80014', linea:'BLOCK', op:'OP80', motores:[], desc:'',
    piezas:[
      { tipo:'MACHO', sap:'66230000001205', descripcion:'M8 x 1,25 x 90mm', proveedor:'2506-8,00', armario:'1', cajon:'6', stock:1, sugerida:1, max:3, foto:null},
    ]},
  { codigo:'80015', linea:'BLOCK', op:'OP80', motores:[], desc:'',
    piezas:[
      { tipo:'MACHO', sap:'66230000000830', descripcion:'M16 x 2 x 110mm', proveedor:'319-16,000', armario:'4', cajon:'5', stock:1, sugerida:1, max:3, foto:null},
    ]},
  { codigo:'80016', linea:'BLOCK', op:'OP80', motores:[], desc:'',
    piezas:[
      { tipo:'MACHO', sap:'66230000000819', descripcion:'M18 x 1,5 x 110mm', proveedor:'302 684 210', armario:'4', cajon:'5', stock:2, sugerida:1, max:3, foto:null},
    ]},
  { codigo:'80017', linea:'BLOCK', op:'OP80', motores:[], desc:'',
    piezas:[
      { tipo:'MACHO', sap:'66230000001206', descripcion:'M10 x 1,5 x 100mm', proveedor:'2506-10,00', armario:'1', cajon:'6', stock:3, sugerida:1, max:3, foto:null},
    ]},
  { codigo:'80018', linea:'BLOCK', op:'OP80', motores:[], desc:'',
    piezas:[
      { tipo:'MACHO', sap:'66230000000704', descripcion:'RP 1/4 -19 x 100mm', proveedor:'302 684 211', armario:'4', cajon:'1', stock:2, sugerida:1, max:3, foto:null},
    ]},
  { codigo:'80019', linea:'BLOCK', op:'OP80', motores:[], desc:'',
    piezas:[
      { tipo:'MACHO', sap:'66230000000820', descripcion:'RP 3/8  x 100mm', proveedor:'302 684 164', armario:'3', cajon:'8', stock:3, sugerida:1, max:3, foto:null},
    ]},
  { codigo:'80020', linea:'BLOCK', op:'OP80', motores:[], desc:'',
    piezas:[
      { tipo:'INSERTO', sap:'66230000001123', descripcion:'T490 LNMT 1306PNTR IC810', proveedor:'5605882', armario:'1', cajon:'3', stock:10, sugerida:6, max:18, foto:null},
    ]},
  { codigo:'80022', linea:'BLOCK', op:'OP80', motores:[], desc:'',
    piezas:[
      { tipo:'MECHA', sap:'66230000000832', descripcion:'Ø6,8m7 - Ø10 x 89mm', proveedor:'302 699 227', armario:'4', cajon:'5', stock:1, sugerida:1, max:2, foto:null, stockAfilado:0},
    ]},
  { codigo:'80023', linea:'BLOCK', op:'OP80', motores:[], desc:'',
    piezas:[
      { tipo:'MECHA', sap:'66230000000488', descripcion:'Ø6,8m7 - Ø12 x 94mm', proveedor:'302 684 162', armario:'3', cajon:'8', stock:5, sugerida:1, max:2, foto:null, stockAfilado:2},
    ]},
  { codigo:'80027', linea:'BLOCK', op:'OP80', motores:[], desc:'',
    piezas:[
      { tipo:'INSERTO', sap:'66230000000723', descripcion:'CCHX 060204L 112', proveedor:'6686-62,040', armario:'1', cajon:'6', stock:3, sugerida:2, max:6, foto:null},
      { tipo:'PUNTA INTERC.', sap:'66230000000836', descripcion:'Ø20,5m7 x 13,9mm', proveedor:'4113-20,50', armario:'4', cajon:'5', stock:4, sugerida:1, max:3, foto:null},
    ]},
  { codigo:'80028', linea:'BLOCK', op:'OP80', motores:[], desc:'',
    piezas:[
      { tipo:'INSERTO', sap:'66230000000838', descripcion:'SCHW 09T304', proveedor:'302 458 729', armario:'1', cajon:'6', stock:5, sugerida:2, max:6, foto:null},
      { tipo:'PUNTA INTERC.', sap:'66230000000839', descripcion:'Ø18,15 - Ø34,5h7 x 23,3mm', proveedor:'333 099 942', armario:'1', cajon:'6', stock:5, sugerida:1, max:3, foto:null},
    ]},
  { codigo:'80029', linea:'BLOCK', op:'OP80', motores:[], desc:'',
    piezas:[
      { tipo:'INSERTO', sap:'66230000000842', descripcion:'FTHQ 090504 A32L00B016-HP455', proveedor:'30294458', armario:'2', cajon:'4', stock:6, sugerida:2, max:6, foto:null},
    ]},
  { codigo:'80030', linea:'BLOCK', op:'OP80', motores:[], desc:'',
    piezas:[
      { tipo:'MECHA', sap:'66230000000843', descripcion:'Ø4m7 x 54mm', proveedor:'302 684 218', armario:'4', cajon:'5', stock:2, sugerida:1, max:2, foto:null, stockAfilado:1},
    ]},
  { codigo:'80031', linea:'BLOCK', op:'OP80', motores:[], desc:'',
    piezas:[
      { tipo:'MECHA', sap:'66230000000845', descripcion:'Ø4h7 x 93mm', proveedor:'302 684 219', armario:'4', cajon:'6', stock:4, sugerida:1, max:2, foto:null, stockAfilado:2},
    ]},
  { codigo:'80032', linea:'BLOCK', op:'OP80', motores:[], desc:'',
    piezas:[
      { tipo:'INSERTO', sap:'66230000000053', descripcion:'SCHT 09T304 E04X-1J-HP455', proveedor:'30229240 - 30953127', armario:'2', cajon:'1', stock:4, sugerida:1, max:3, foto:null},
      { tipo:'INSERTO', sap:'66230000000521', descripcion:'CCHT 09T302 E04L-1J-HP455', proveedor:'30501549', armario:'2', cajon:'3', stock:7, sugerida:5, max:15, foto:null},
    ]},
  { codigo:'80033', linea:'BLOCK', op:'OP80', motores:[], desc:'',
    piezas:[
      { tipo:'INSERTO', sap:'66230000000071', descripcion:'CCHT 060204 E04L-1J-HP455', proveedor:'30227070', armario:'2', cajon:'1', stock:3, sugerida:3, max:9, foto:null},
    ]},
  { codigo:'80034', linea:'BLOCK', op:'OP80', motores:[], desc:'',
    piezas:[
      { tipo:'PUNTA INTERC.', sap:'66230000000481', descripcion:'Ø25m7 - 15,8mm', proveedor:'4113-25,00', armario:'3', cajon:'8', stock:3, sugerida:1, max:3, foto:null},
    ]},
  { codigo:'80035', linea:'BLOCK', op:'OP80', motores:[], desc:'',
    piezas:[
      { tipo:'MECHA', sap:'66230000000850', descripcion:'Ø14,5m7 - Ø18 x 160mm', proveedor:'302 684 220', armario:'4', cajon:'6', stock:1, sugerida:1, max:2, foto:null, stockAfilado:0},
    ]},
  { codigo:'80036', linea:'BLOCK', op:'OP80', motores:[], desc:'',
    piezas:[
      { tipo:'MECHA', sap:'66230000000851', descripcion:'Ø14,5m7 - Ø18 x 110mm', proveedor:'302 684 221', armario:'4', cajon:'6', stock:4, sugerida:1, max:2, foto:null, stockAfilado:3},
    ]},
  { codigo:'80037', linea:'BLOCK', op:'OP80', motores:[], desc:'',
    piezas:[
      { tipo:'INSERTO', sap:'66230000000054', descripcion:'CCHT 09T304 E04L-1L-HP455', proveedor:'30229239 - 30454738', armario:'2', cajon:'1', stock:6, sugerida:2, max:6, foto:null},
      { tipo:'INSERTO', sap:'66230000000249', descripcion:'SCHT 09T308 E04L-2L-HC725', proveedor:'30239339 - 30679974', armario:'2', cajon:'2', stock:4, sugerida:2, max:6, foto:null},
      { tipo:'INSERTO', sap:'66230000000853', descripcion:'S10-1477HPR04-HP455', proveedor:'30316527', armario:'2', cajon:'4', stock:6, sugerida:2, max:6, foto:null},
    ]},
  { codigo:'80038', linea:'BLOCK', op:'OP80', motores:[], desc:'',
    piezas:[
      { tipo:'FRESA ROSCADO', sap:'66230000000855', descripcion:'Ø15,95 x1,5 x 90mm', proveedor:'302 815 238', armario:'4', cajon:'6', stock:5, sugerida:1, max:3, foto:null},
    ]},
  { codigo:'80039', linea:'BLOCK', op:'OP80', motores:[], desc:'',
    piezas:[
      { tipo:'INSERTO', sap:'66230000000016', descripcion:'YDA323L101 IN2004', proveedor:'5869313', armario:'1', cajon:'1', stock:7, sugerida:3, max:9, foto:null},
      { tipo:'INSERTO', sap:'66230000000857', descripcion:'DPM314R001 IN2005', proveedor:'5811540', armario:'1', cajon:'2', stock:18, sugerida:15, max:45, foto:null},
    ]},
  { codigo:'80040', linea:'BLOCK', op:'OP80', motores:[], desc:'',
    piezas:[
      { tipo:'MECHA', sap:'66230000000858', descripcion:'Ø9,8m7 - Ø12 x 97mm', proveedor:'302 684 180', armario:'4', cajon:'6', stock:2, sugerida:1, max:2, foto:null, stockAfilado:0},
    ]},
  { codigo:'80041', linea:'BLOCK', op:'OP80', motores:[], desc:'',
    piezas:[
      { tipo:'INSERTO', sap:'66230000000656', descripcion:'Inserto especial Gühring - Mapal', proveedor:'30320395', armario:'1', cajon:'5', stock:1, sugerida:1, max:3, foto:null},
    ]},
  { codigo:'80042', linea:'BLOCK', op:'OP80', motores:[], desc:'',
    piezas:[
      { tipo:'MECHA', sap:'66230000000859', descripcion:'Ø10m7 x 150mm', proveedor:'302 684 224', armario:'4', cajon:'6', stock:1, sugerida:1, max:2, foto:null, stockAfilado:0},
    ]},
  { codigo:'80044', linea:'BLOCK', op:'OP80', motores:[], desc:'',
    piezas:[
      { tipo:'MACHO', sap:'66230000000860', descripcion:'M16 x1,5 x 100mm', proveedor:'302 693 925', armario:'4', cajon:'6', stock:3, sugerida:1, max:3, foto:null},
    ]},
  { codigo:'80045', linea:'BLOCK', op:'OP80', motores:[], desc:'',
    piezas:[
      { tipo:'MACHO', sap:'66230000000867', descripcion:'M22 x1,5 x 125mm', proveedor:'302 684 225', armario:'4', cajon:'6', stock:2, sugerida:1, max:3, foto:null},
    ]},
  { codigo:'80046', linea:'BLOCK', op:'OP80', motores:[], desc:'',
    piezas:[
      { tipo:'INSERTO', sap:'66230000000762', descripcion:'DGM212R101 K IN2505', proveedor:'5850378', armario:'1', cajon:'2', stock:18, sugerida:15, max:45, foto:null},
    ]},
  { codigo:'80047', linea:'BLOCK', op:'OP80', motores:[], desc:'',
    piezas:[
      { tipo:'INSERTO', sap:'66230000000871', descripcion:'SCHT 120404 F01X-1J-HC417', proveedor:'30020095', armario:'2', cajon:'4', stock:2, sugerida:1, max:3, foto:null},
      { tipo:'INSERTO', sap:'66230000000229', descripcion:'WP - 54109 - W', proveedor:'WP - 54109 - W-HC416', armario:'2', cajon:'2', stock:7, sugerida:4, max:12, foto:null},
    ]},
  { codigo:'80048', linea:'BLOCK', op:'OP80', motores:[], desc:'',
    piezas:[
      { tipo:'INSERTO', sap:'66230000001123', descripcion:'T490 LNMT 1306PNTR IC810', proveedor:'5605882', armario:'1', cajon:'3', stock:9, sugerida:8, max:24, foto:null},
    ]},
  { codigo:'80049', linea:'BLOCK', op:'OP80', motores:[], desc:'',
    piezas:[
      { tipo:'INSERTO', sap:'66230000000053', descripcion:'SCHT 09T304 E04X-1J-HP455', proveedor:'30229240 - 30953127', armario:'2', cajon:'1', stock:7, sugerida:3, max:9, foto:null},
      { tipo:'INSERTO', sap:'66230000000054', descripcion:'CCHT 09T304 E04L-1L-HP455', proveedor:'30229239 - 30454738', armario:'2', cajon:'1', stock:4, sugerida:3, max:9, foto:null},
      { tipo:'INSERTO', sap:'66230000001112', descripcion:'CTHD 13T304D02L-HP455', proveedor:'30029821', armario:'2', cajon:'6', stock:2, sugerida:2, max:6, foto:null},
      { tipo:'INSERTO', sap:'66230000001113', descripcion:'CTHD 09T304D02L-HP455', proveedor:'30225911', armario:'2', cajon:'7', stock:6, sugerida:2, max:6, foto:null},
    ]},
  { codigo:'80050', linea:'BLOCK', op:'OP80', motores:[], desc:'',
    piezas:[
      { tipo:'INSERTO', sap:'66230000000053', descripcion:'SCHT 09T304 E04X-1J-HP455', proveedor:'30229240 - 30953127', armario:'2', cajon:'1', stock:3, sugerida:3, max:9, foto:null},
      { tipo:'INSERTO', sap:'66230000000054', descripcion:'CCHT 09T304 E04L-1L-HP455', proveedor:'30229239 - 30454738', armario:'2', cajon:'1', stock:7, sugerida:3, max:9, foto:null},
      { tipo:'INSERTO', sap:'66230000001584', descripcion:'CCGW09T308 S01225MT KBH20', proveedor:'5330137', armario:'1', cajon:'1', stock:7, sugerida:3, max:9, foto:null},
    ]},
  { codigo:'80051', linea:'BLOCK', op:'OP80', motores:[], desc:'',
    piezas:[
      { tipo:'MECHA', sap:'66230000000879', descripcion:'Ø20m7 - Ø21 x 143mm', proveedor:'302 694 573', armario:'4', cajon:'6', stock:4, sugerida:1, max:2, foto:null, stockAfilado:1},
    ]},
  { codigo:'80052', linea:'BLOCK', op:'OP80', motores:[], desc:'',
    piezas:[
      { tipo:'MECHA', sap:'66230000000880', descripcion:'Ø8,5m7 - Ø12 x 97mm', proveedor:'302 694 574', armario:'4', cajon:'6', stock:5, sugerida:1, max:2, foto:null, stockAfilado:3},
    ]},
  { codigo:'80053', linea:'BLOCK', op:'OP80', motores:[], desc:'',
    piezas:[
      { tipo:'MECHA', sap:'66230000000881', descripcion:'Ø6,8m7 - Ø9m7 - Ø10 x 100mm', proveedor:'302 694 571', armario:'4', cajon:'6', stock:5, sugerida:1, max:2, foto:null, stockAfilado:1},
    ]},
  { codigo:'80054', linea:'BLOCK', op:'OP80', motores:[], desc:'',
    piezas:[
      { tipo:'INSERTO', sap:'66230000000053', descripcion:'SCHT 09T304 E04X-1J-HP455', proveedor:'30229240 - 30953127', armario:'2', cajon:'1', stock:7, sugerida:3, max:9, foto:null},
      { tipo:'INSERTO', sap:'66230000000054', descripcion:'CCHT 09T304 E04L-1L-HP455', proveedor:'30229239 - 30454738', armario:'2', cajon:'1', stock:8, sugerida:6, max:18, foto:null},
    ]},
  { codigo:'80055', linea:'BLOCK', op:'OP80', motores:[], desc:'',
    piezas:[
      { tipo:'PUNTA INTERC.', sap:'66230000000481', descripcion:'Ø25m7 - 15,8mm', proveedor:'4113-25,00', armario:'3', cajon:'8', stock:4, sugerida:1, max:3, foto:null},
    ]},
  { codigo:'80057', linea:'BLOCK', op:'OP80', motores:[], desc:'',
    piezas:[
      { tipo:'PUNTA INTERC.', sap:'66230000000873', descripcion:'Ø5,5 - Ø15,04 - Ø26,5h7 x 21,75mm', proveedor:'333 099 424', armario:'1', cajon:'6', stock:2, sugerida:1, max:3, foto:null},
      { tipo:'INSERTO', sap:'66230000000884', descripcion:'Inserto especial Gühring', proveedor:'302 732 079', armario:'1', cajon:'6', stock:4, sugerida:2, max:6, foto:null},
    ]},
  { codigo:'80058', linea:'BLOCK', op:'OP80', motores:[], desc:'',
    piezas:[
      { tipo:'INSERTO', sap:'66230000000587', descripcion:'SPHT 060302 E04L-2J-HP455', proveedor:'30230990', armario:'2', cajon:'3', stock:4, sugerida:4, max:12, foto:null},
      { tipo:'INSERTO', sap:'66230000000876', descripcion:'S10252-12B6421/01-HP455', proveedor:'30494579', armario:'2', cajon:'4', stock:4, sugerida:2, max:6, foto:null},
    ]},
  { codigo:'80059', linea:'BLOCK', op:'OP80', motores:[], desc:'',
    piezas:[
      { tipo:'MECHA', sap:'66230000000885', descripcion:'Ø3,6 - Ø6m7 x 105mm', proveedor:'302 699 222', armario:'4', cajon:'6', stock:4, sugerida:1, max:2, foto:null, stockAfilado:2},
    ]},
  { codigo:'80060', linea:'BLOCK', op:'OP80', motores:[], desc:'',
    piezas:[
      { tipo:'MECHA', sap:'66230000000887', descripcion:'Ø9,5m7 - Ø12m7 x 90mm', proveedor:'302 699 223', armario:'4', cajon:'6', stock:2, sugerida:1, max:2, foto:null, stockAfilado:1},
    ]},
  { codigo:'80061', linea:'BLOCK', op:'OP80', motores:[], desc:'',
    piezas:[
      { tipo:'ESCARIADOR', sap:'66230000001114', descripcion:'Ø10 R8', proveedor:'30476685', armario:'2', cajon:'10', stock:3, sugerida:1, max:3, foto:null},
    ]},
  { codigo:'80062', linea:'BLOCK', op:'OP80', motores:[], desc:'',
    piezas:[
      { tipo:'MECHA', sap:'66230000000888', descripcion:'Ø10m7 - Ø14,5m7 - Ø16,4m7 x 115mm', proveedor:'302 694 567', armario:'4', cajon:'6', stock:4, sugerida:1, max:2, foto:null, stockAfilado:3},
    ]},
  { codigo:'80063', linea:'BLOCK', op:'OP80', motores:[], desc:'',
    piezas:[
      { tipo:'MECHA', sap:'66230000000889', descripcion:'Ø8m7 - Ø14,5m7 - Ø16,4m7 x 150mm', proveedor:'302 694 568', armario:'4', cajon:'6', stock:2, sugerida:1, max:2, foto:null, stockAfilado:0},
    ]},
  { codigo:'80064', linea:'BLOCK', op:'OP80', motores:[], desc:'',
    piezas:[
      { tipo:'MECHA', sap:'66230000000890', descripcion:'Ø8,5m7 - Ø12m7 x 103mm', proveedor:'302 699 228', armario:'4', cajon:'6', stock:1, sugerida:1, max:2, foto:null, stockAfilado:2},
    ]},
  { codigo:'80065', linea:'BLOCK', op:'OP80', motores:[], desc:'',
    piezas:[
      { tipo:'MACHO', sap:'66230000000891', descripcion:'M10 x 1,5 x 135mm', proveedor:'302 693 928', armario:'4', cajon:'7', stock:4, sugerida:1, max:3, foto:null},
    ]},
  { codigo:'80066', linea:'BLOCK', op:'OP80', motores:[], desc:'',
    piezas:[
      { tipo:'MECHA', sap:'66230000000892', descripcion:'Ø7 - Ø10,5 - Ø11,5m7 - Ø14 x 85mm', proveedor:'302 699 229', armario:'4', cajon:'7', stock:4, sugerida:1, max:2, foto:null, stockAfilado:1},
    ]},
  { codigo:'80067', linea:'BLOCK', op:'OP80', motores:[], desc:'',
    piezas:[
      { tipo:'ESCARIADOR', sap:'66230000001115', descripcion:'Ø 12.0E8 X 120', proveedor:'30476684', armario:'2', cajon:'10', stock:4, sugerida:1, max:3, foto:null},
    ]},
  { codigo:'80070', linea:'BLOCK', op:'OP80', motores:[], desc:'',
    piezas:[
      { tipo:'MECHA', sap:'66230000000893', descripcion:'Ø12m7 - Ø16m7 x 113mm', proveedor:'302 694 569', armario:'4', cajon:'7', stock:3, sugerida:1, max:2, foto:null, stockAfilado:2},
    ]},
  { codigo:'80071', linea:'BLOCK', op:'OP80', motores:[], desc:'',
    piezas:[
      { tipo:'MACHO', sap:'66230000000894', descripcion:'M14 x 2 x 110mm', proveedor:'319-14,000', armario:'4', cajon:'7', stock:5, sugerida:1, max:3, foto:null},
    ]},
  { codigo:'80072', linea:'BLOCK', op:'OP80', motores:[], desc:'',
    piezas:[
      { tipo:'INSERTO', sap:'66230000000723', descripcion:'CCHX 060204L 112', proveedor:'6686-62,040', armario:'1', cajon:'6', stock:2, sugerida:2, max:6, foto:null},
    ]},
  { codigo:'80073', linea:'BLOCK', op:'OP80', motores:[], desc:'',
    piezas:[
      { tipo:'INSERTO', sap:'66230000000762', descripcion:'DGM212R101 K IN2505', proveedor:'5850378', armario:'1', cajon:'2', stock:34, sugerida:32, max:96, foto:null},
    ]},
  { codigo:'80074', linea:'BLOCK', op:'OP80', motores:[], desc:'',
    piezas:[
      { tipo:'MECHA', sap:'66230000000899', descripcion:'Ø6,8m7 - Ø10m7 x 87mm', proveedor:'302 699 230', armario:'4', cajon:'7', stock:2, sugerida:1, max:2, foto:null, stockAfilado:2},
    ]},
  { codigo:'80075', linea:'BLOCK', op:'OP80', motores:[], desc:'',
    piezas:[
      { tipo:'MECHA', sap:'66230000000900', descripcion:'Ø6m7 - Ø10 x 85mm', proveedor:'302 694 566', armario:'4', cajon:'7', stock:1, sugerida:1, max:2, foto:null, stockAfilado:2},
    ]},
  { codigo:'80076', linea:'BLOCK', op:'OP80', motores:[], desc:'',
    piezas:[
      { tipo:'MACHO', sap:'66230000000901', descripcion:'M7 x 1 x 80mm', proveedor:'302 693 924', armario:'4', cajon:'7', stock:3, sugerida:1, max:3, foto:null},
    ]},
  { codigo:'80077', linea:'BLOCK', op:'OP80', motores:[], desc:'',
    piezas:[
      { tipo:'MECHA', sap:'66230000000902', descripcion:'Ø20,5m7 - Ø25 x 142mm', proveedor:'302 694 536', armario:'4', cajon:'7', stock:3, sugerida:1, max:2, foto:null, stockAfilado:2},
    ]},
  { codigo:'80078', linea:'BLOCK', op:'OP80', motores:[], desc:'',
    piezas:[
      { tipo:'INSERTO', sap:'66230000000456', descripcion:'BOMT09T308R IN2505', proveedor:'5812698', armario:'1', cajon:'2', stock:9, sugerida:8, max:24, foto:null},
    ]},
  { codigo:'80081', linea:'BLOCK', op:'OP80', motores:[], desc:'',
    piezas:[
      { tipo:'MECHA', sap:'66230000001485', descripcion:'Ø6,8m7 - Ø10h7 x 89mm', proveedor:'B976AS6579355 KC7315', armario:'1', cajon:'4', stock:1, sugerida:1, max:2, foto:null, stockAfilado:0},
    ]},
  { codigo:'80082', linea:'BLOCK', op:'OP80', motores:[], desc:'',
    piezas:[
      { tipo:'INSERTO', sap:'66230000001475', descripcion:'DFT06T308HP KCU25', proveedor:'5067473', armario:'1', cajon:'4', stock:3, sugerida:1, max:3, foto:null},
      { tipo:'INSERTO', sap:'66230000001476', descripcion:'SPPX120412FP KCU25', proveedor:'4042913', armario:'1', cajon:'4', stock:3, sugerida:1, max:3, foto:null},
    ]},
  { codigo:'80083', linea:'BLOCK', op:'OP80', motores:[], desc:'',
    piezas:[
      { tipo:'MECHA', sap:'66230000001488', descripcion:'Ø6,8m7 - Ø12h7 x 102mm', proveedor:'B976AS6579356 KC7315', armario:'1', cajon:'4', stock:4, sugerida:1, max:2, foto:null, stockAfilado:3},
    ]},
  { codigo:'80085', linea:'BLOCK', op:'OP80', motores:[], desc:'',
    piezas:[
      { tipo:'MECHA', sap:'66230000001484', descripcion:'Ø10,25m7 - Ø14h7 x 107mm', proveedor:'B976AS6579357 KC7315', armario:'1', cajon:'4', stock:2, sugerida:1, max:2, foto:null, stockAfilado:2},
    ]},
  { codigo:'80086', linea:'BLOCK', op:'OP80', motores:[], desc:'',
    piezas:[
      { tipo:'MECHA', sap:'66230000000810', descripcion:'Ø10,2m7 - Ø14 x 107mm', proveedor:'302 698 819', armario:'4', cajon:'4', stock:2, sugerida:1, max:2, foto:null, stockAfilado:1},
    ]},
  { codigo:'80087', linea:'BLOCK', op:'OP80', motores:[], desc:'',
    piezas:[
      { tipo:'MECHA', sap:'66230000000759', descripcion:'Ø6,8m7 - Ø8 x 82mm', proveedor:'302 684 196', armario:'4', cajon:'3', stock:3, sugerida:1, max:2, foto:null, stockAfilado:0},
    ]},
  { codigo:'80088', linea:'BLOCK', op:'OP80', motores:[], desc:'',
    piezas:[
      { tipo:'MACHO', sap:'66230000001241', descripcion:'M12 x 1,75 x 110mm', proveedor:'1883-12,00', armario:'1', cajon:'6', stock:1, sugerida:1, max:3, foto:null},
    ]},
  { codigo:'80089', linea:'BLOCK', op:'OP80', motores:[], desc:'',
    piezas:[
      { tipo:'MECHA', sap:'66230000001328', descripcion:'Ø15m7 - Ø17,6m7 - Ø20 x 140mm', proveedor:'303 540 639', armario:'5', cajon:'8', stock:4, sugerida:1, max:2, foto:null, stockAfilado:2},
    ]},
  { codigo:'80090', linea:'BLOCK', op:'OP80', motores:[], desc:'',
    piezas:[
      { tipo:'ESCARIADOR', sap:'66230000001311', descripcion:'Ø17,95 H7 x 150mm', proveedor:'303 540 640', armario:'5', cajon:'8', stock:5, sugerida:1, max:3, foto:null},
    ]},
  { codigo:'80091', linea:'BLOCK', op:'OP80', motores:[], desc:'',
    piezas:[
      { tipo:'MECHA', sap:'66230000000326', descripcion:'Ø5m7 - Ø8 x 85mm', proveedor:'302 685 352', armario:'3', cajon:'6', stock:5, sugerida:1, max:2, foto:null, stockAfilado:0},
    ]},
  { codigo:'80092', linea:'BLOCK', op:'OP80', motores:[], desc:'',
    piezas:[
      { tipo:'MACHO', sap:'66230000000424', descripcion:'M6 x 1 x 80mm', proveedor:'318-6,000', armario:'1', cajon:'6', stock:1, sugerida:1, max:3, foto:null},
    ]},
  { codigo:'80093', linea:'BLOCK', op:'OP80', motores:[], desc:'',
    piezas:[
      { tipo:'INSERTO', sap:'66230000001313', descripcion:'SCMT09T308N', proveedor:'6239-93.080', armario:'5', cajon:'1', stock:4, sugerida:2, max:6, foto:null},
    ]},
  { codigo:'80094', linea:'BLOCK', op:'OP80', motores:[], desc:'',
    piezas:[
      { tipo:'MECHA', sap:'66230000001326', descripcion:'Ø14,5m7 - Ø18 x 116mm', proveedor:'303 539 953', armario:'5', cajon:'8', stock:2, sugerida:1, max:2, foto:null, stockAfilado:3},
    ]},
  { codigo:'80095', linea:'BLOCK', op:'OP80', motores:[], desc:'',
    piezas:[
      { tipo:'MECHA', sap:'66230000001330', descripcion:'Ø8,5m7 - Ø12 x 102mm', proveedor:'303 540 678', armario:'5', cajon:'8', stock:5, sugerida:1, max:2, foto:null, stockAfilado:1},
    ]},
  { codigo:'80096', linea:'BLOCK', op:'OP80', motores:[], desc:'',
    piezas:[
      { tipo:'INSERTO', sap:'66230000001123', descripcion:'T490 LNMT 1306PNTR IC810', proveedor:'5605882', armario:'1', cajon:'3', stock:35, sugerida:35, max:105, foto:null},
    ]},
  { codigo:'80100', linea:'BLOCK', op:'OP80', motores:[], desc:'',
    piezas:[
      { tipo:'MECHA', sap:'66230000001148', descripcion:'Ø6,8m7 - Ø10,9m7 - Ø14 x 91mm', proveedor:'302 887 698', armario:'4', cajon:'7', stock:1, sugerida:1, max:2, foto:null, stockAfilado:2},
    ]},
  { codigo:'80101', linea:'BLOCK', op:'OP90', motores:[], desc:'',
    piezas:[
      { tipo:'ESCARIADOR', sap:'66230000001050', descripcion:'Ø11,5 H8 x 130mm', proveedor:'302 887 538', armario:'4', cajon:'7', stock:3, sugerida:1, max:3, foto:null},
    ]},
  { codigo:'90001', linea:'BLOCK', op:'OP90', motores:[], desc:'',
    piezas:[
      { tipo:'INSERTO', sap:'66230000001149', descripcion:'745R-2109E-M50 K20D', proveedor:'745R-2109E-M50 K20D', armario:'1', cajon:'4', stock:17, sugerida:14, max:42, foto:null},
    ]},
  { codigo:'90002', linea:'BLOCK', op:'OP90', motores:[], desc:'',
    piezas:[
      { tipo:'INSERTO', sap:'66230000000376', descripcion:'OPDN53-100 IN70N', proveedor:'5868046', armario:'1', cajon:'1', stock:16, sugerida:15, max:45, foto:null},
      { tipo:'INSERTO', sap:'66230000000377', descripcion:'YWH454L101 IN80B', proveedor:'5202781', armario:'1', cajon:'1', stock:7, sugerida:3, max:9, foto:null},
    ]},
  { codigo:'90003', linea:'BLOCK', op:'OP90', motores:[], desc:'',
    piezas:[
      { tipo:'INSERTO', sap:'66230000000909', descripcion:'DZ90R6W2-HC417', proveedor:'30914369', armario:'2', cajon:'4', stock:3, sugerida:1, max:3, foto:null},
    ]},
  { codigo:'90005', linea:'BLOCK', op:'OP90', motores:[], desc:'',
    piezas:[
      { tipo:'INSERTO', sap:'66230000001471', descripcion:'SCMT 120408LF KC5010', proveedor:'1871084', armario:'1', cajon:'4', stock:3, sugerida:3, max:9, foto:null},
      { tipo:'INSERTO', sap:'66230000001472', descripcion:'SCMT 09T308LF KC5010', proveedor:'1871002', armario:'1', cajon:'4', stock:9, sugerida:6, max:18, foto:null},
    ]},
  { codigo:'90006', linea:'BLOCK', op:'OP90', motores:[], desc:'',
    piezas:[
      { tipo:'INSERTO', sap:'66230000000938', descripcion:'SCHT 09T304 E02L-2L-HP455', proveedor:'30679981', armario:'2', cajon:'4', stock:4, sugerida:2, max:6, foto:null},
      { tipo:'INSERTO', sap:'66230000000939', descripcion:'HX38R3F0-FU861', proveedor:'30100027', armario:'2', cajon:'5', stock:6, sugerida:4, max:12, foto:null},
    ]},
  { codigo:'90007', linea:'BLOCK', op:'OP90', motores:[], desc:'',
    piezas:[
      { tipo:'INSERTO', sap:'66230000000935', descripcion:'VCMW 110308 F01N-0AA-FU720-R', proveedor:'10091617', armario:'2', cajon:'4', stock:1, sugerida:1, max:3, foto:null},
    ]},
  { codigo:'90009', linea:'BLOCK', op:'OP90', motores:[], desc:'',
    piezas:[
      { tipo:'INSERTO', sap:'66230000001134', descripcion:'DZ93R6W2-HC417', proveedor:'30914473', armario:'2', cajon:'7', stock:2, sugerida:2, max:6, foto:null},
    ]},
  { codigo:'90010', linea:'BLOCK', op:'OP90', motores:[], desc:'',
    piezas:[
      { tipo:'INSERTO', sap:'66230000001133', descripcion:'DZ91R6-HC417', proveedor:'30914399', armario:'2', cajon:'7', stock:4, sugerida:1, max:3, foto:null},
    ]},
  { codigo:'90011', linea:'BLOCK', op:'OP90', motores:[], desc:'',
    piezas:[
      { tipo:'INSERTO', sap:'66230000001133', descripcion:'DZ91R6-HC417', proveedor:'30914399', armario:'2', cajon:'7', stock:2, sugerida:1, max:3, foto:null},
    ]},
  { codigo:'90012', linea:'BLOCK', op:'OP90', motores:[], desc:'',
    piezas:[
      { tipo:'INSERTO', sap:'66230000000678', descripcion:'DZ92R6W2-HC417', proveedor:'DZ92R6W2', armario:'2', cajon:'4', stock:5, sugerida:1, max:3, foto:null},
    ]},
  { codigo:'90013', linea:'BLOCK', op:'OP90', motores:[], desc:'',
    piezas:[
      { tipo:'INSERTO', sap:'66230000000909', descripcion:'DZ90R6W2-HC417', proveedor:'30914369', armario:'2', cajon:'4', stock:1, sugerida:1, max:3, foto:null},
    ]},
  { codigo:'90016', linea:'BLOCK', op:'OP90', motores:[], desc:'',
    piezas:[
      { tipo:'INSERTO', sap:'66230000001133', descripcion:'DZ91R6-HC417', proveedor:'30914399', armario:'2', cajon:'7', stock:3, sugerida:1, max:3, foto:null},
    ]},
  { codigo:'90017', linea:'BLOCK', op:'OP90', motores:[], desc:'',
    piezas:[
      { tipo:'INSERTO', sap:'66230000001133', descripcion:'DZ91R6-HC417', proveedor:'30914399', armario:'2', cajon:'7', stock:4, sugerida:1, max:3, foto:null},
    ]},
  { codigo:'90019', linea:'BLOCK', op:'OP90', motores:[], desc:'',
    piezas:[
      { tipo:'INSERTO', sap:'66230000000909', descripcion:'DZ90R6W2-HC417', proveedor:'30914369', armario:'2', cajon:'4', stock:4, sugerida:1, max:3, foto:null},
    ]},
  { codigo:'90020', linea:'BLOCK', op:'OP90', motores:[], desc:'',
    piezas:[
      { tipo:'INSERTO', sap:'66230000000041', descripcion:'SPHT 060304 E04L-2L-HC725', proveedor:'30217118 - 30679971', armario:'2', cajon:'1', stock:4, sugerida:1, max:3, foto:null},
      { tipo:'INSERTO', sap:'66230000000071', descripcion:'CCHT 060204 E04L-1J-HP455', proveedor:'30227070', armario:'2', cajon:'1', stock:6, sugerida:3, max:9, foto:null},
    ]},
  { codigo:'90021', linea:'BLOCK', op:'OP90', motores:[], desc:'',
    piezas:[
      { tipo:'MECHA', sap:'66230000000944', descripcion:'Ø21,5m7 - Ø25m7 x 120mm', proveedor:'302 699 231', armario:'4', cajon:'7', stock:4, sugerida:1, max:2, foto:null, stockAfilado:2},
    ]},
  { codigo:'90022', linea:'BLOCK', op:'OP90', motores:[], desc:'',
    piezas:[
      { tipo:'HPR', sap:'66230000000933', descripcion:'Ø22N9-HC413', proveedor:'30219157', armario:'2', cajon:'8', stock:2, sugerida:1, max:3, foto:null},
    ]},
  { codigo:'90023', linea:'BLOCK', op:'OP90', motores:[], desc:'',
    piezas:[
      { tipo:'MECHA', sap:'66230000000948', descripcion:'Ø9,5m7 - Ø12 x 87mm', proveedor:'302 699 233', armario:'4', cajon:'7', stock:3, sugerida:1, max:2, foto:null, stockAfilado:3},
    ]},
  { codigo:'90025', linea:'BLOCK', op:'OP90', motores:[], desc:'',
    piezas:[
      { tipo:'', sap:'', descripcion:'', proveedor:'', armario:'', cajon:'', stock:4, sugerida:1, max:3, foto:null},
      { tipo:'', sap:'', descripcion:'', proveedor:'', armario:'', cajon:'', stock:4, sugerida:1, max:3, foto:null},
    ]},
  { codigo:'90026', linea:'BLOCK', op:'OP90', motores:[], desc:'',
    piezas:[
      { tipo:'INSERTO', sap:'66230000000935', descripcion:'VCMW 110308 F01N-0AA-FU720-R', proveedor:'10091617', armario:'2', cajon:'4', stock:4, sugerida:1, max:3, foto:null},
    ]},
  { codigo:'90027', linea:'BLOCK', op:'OP90', motores:[], desc:'',
    piezas:[
      { tipo:'MECHA', sap:'66230000000936', descripcion:'Ø1,8 - Ø5m7 Ø6 x 85mm', proveedor:'302 699 232', armario:'4', cajon:'7', stock:5, sugerida:1, max:2, foto:null, stockAfilado:0},
    ]},
  { codigo:'90028', linea:'BLOCK', op:'OP90', motores:[], desc:'',
    piezas:[
      { tipo:'INSERTO', sap:'66230000000938', descripcion:'SCHT 09T304 E02L-2L-HP455', proveedor:'30679981', armario:'2', cajon:'4', stock:4, sugerida:2, max:6, foto:null},
      { tipo:'INSERTO', sap:'66230000000939', descripcion:'HX38R3F0-FU861', proveedor:'30100027', armario:'2', cajon:'5', stock:5, sugerida:4, max:12, foto:null},
    ]},
  { codigo:'90029', linea:'BLOCK', op:'OP90', motores:[], desc:'',
    piezas:[
      { tipo:'MECHA', sap:'66230000000726', descripcion:'Ø9,6m7 - Ø11 - Ø12m7 x 90mm', proveedor:'302 684 184', armario:'4', cajon:'7', stock:4, sugerida:1, max:2, foto:null, stockAfilado:2},
    ]},
  { codigo:'90030', linea:'BLOCK', op:'OP90', motores:[], desc:'',
    piezas:[
      { tipo:'MECHA', sap:'66230000000845', descripcion:'Ø4h7 x 93mm', proveedor:'302 684 219', armario:'4', cajon:'6', stock:5, sugerida:1, max:2, foto:null, stockAfilado:0},
    ]},
  { codigo:'90105', linea:'BLOCK', op:'OP90', motores:[], desc:'',
    piezas:[
      { tipo:'INSERTO', sap:'66230000001369', descripcion:'SCMT 120404 EN', proveedor:'6239-124,040', armario:'1', cajon:'4', stock:7, sugerida:6, max:18, foto:null},
      { tipo:'INSERTO', sap:'66230000001370', descripcion:'CCHX 120404F L-116', proveedor:'6686-124,040', armario:'1', cajon:'4', stock:3, sugerida:2, max:6, foto:null},
    ]},
  { codigo:'90204', linea:'BLOCK', op:'OP90', motores:[], desc:'',
    piezas:[
      { tipo:'INSERTO', sap:'66230000001376', descripcion:'TPCOXX-303623664R G12', proveedor:'303 623 664', armario:'5', cajon:'8', stock:9, sugerida:8, max:24, foto:null},
      { tipo:'INSERTO', sap:'66230000001379', descripcion:'TPCOXX-303624084R G12', proveedor:'303 624 084', armario:'5', cajon:'8', stock:4, sugerida:4, max:12, foto:null},
    ]},
  { codigo:'90205', linea:'BLOCK', op:'OP90', motores:[], desc:'',
    piezas:[
      { tipo:'INSERTO', sap:'66230000001369', descripcion:'SCMT 120404 EN', proveedor:'6239-124,040', armario:'1', cajon:'4', stock:8, sugerida:6, max:18, foto:null},
      { tipo:'INSERTO', sap:'66230000001370', descripcion:'CCHX 120404F L-116', proveedor:'6686-124,040', armario:'1', cajon:'4', stock:2, sugerida:2, max:6, foto:null},
    ]},
  { codigo:'90206', linea:'BLOCK', op:'OP90', motores:[], desc:'',
    piezas:[
      { tipo:'INSERTO', sap:'66230000001539', descripcion:'W4093-04180000L-CBN', proveedor:'20213-40.932', armario:'5', cajon:'8', stock:4, sugerida:1, max:3, foto:null},
    ]},
  { codigo:'90207', linea:'BLOCK', op:'OP90', motores:[], desc:'',
    piezas:[
      { tipo:'INSERTO', sap:'66230000001381', descripcion:'VCMW 110308', proveedor:'333 243 458', armario:'5', cajon:'8', stock:5, sugerida:1, max:3, foto:null},
    ]},
  { codigo:'9000801', linea:'BLOCK', op:'OP90', motores:[], desc:'',
    piezas:[
      { tipo:'INSERTO', sap:'66230000000959', descripcion:'SCHT 09T308 E02R-2L-HP455', proveedor:'30294145', armario:'2', cajon:'5', stock:14, sugerida:14, max:42, foto:null},
    ]},
  { codigo:'9000802', linea:'BLOCK', op:'OP90', motores:[], desc:'',
    piezas:[
      { tipo:'INSERTO', sap:'66230000000959', descripcion:'SCHT 09T308 E02R-2L-HP455', proveedor:'30294145', armario:'2', cajon:'5', stock:17, sugerida:14, max:42, foto:null},
    ]},
  { codigo:'9001501', linea:'BLOCK', op:'OP90', motores:[], desc:'',
    piezas:[
      { tipo:'INSERTO', sap:'66230000000959', descripcion:'SCHT 09T308 E02R-2L-HP455', proveedor:'30294145', armario:'2', cajon:'5', stock:18, sugerida:14, max:42, foto:null},
    ]},
  { codigo:'9001502', linea:'BLOCK', op:'OP90', motores:[], desc:'',
    piezas:[
      { tipo:'INSERTO', sap:'66230000000959', descripcion:'SCHT 09T308 E02R-2L-HP455', proveedor:'30294145', armario:'2', cajon:'5', stock:17, sugerida:14, max:42, foto:null},
    ]},
  { codigo:'9003801', linea:'BLOCK', op:'OP90', motores:[], desc:'',
    piezas:[
      { tipo:'INSERTO', sap:'66230000000959', descripcion:'SCHT 09T308 E02R-2L-HP455', proveedor:'30294145', armario:'2', cajon:'5', stock:16, sugerida:14, max:42, foto:null},
    ]},
  { codigo:'9003802', linea:'BLOCK', op:'OP90', motores:[], desc:'',
    piezas:[
      { tipo:'INSERTO', sap:'66230000000959', descripcion:'SCHT 09T308 E02R-2L-HP455', proveedor:'30294145', armario:'2', cajon:'5', stock:18, sugerida:14, max:42, foto:null},
    ]},
];

