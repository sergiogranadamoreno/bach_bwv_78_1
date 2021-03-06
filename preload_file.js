//########################################
//# This page contains score data, timing data and the media file path. Save it as a text file in
//# the same folder as abcweb.html. Abcweb preloads score and media when it is opened with the
//# file name as parameter in the url, for example: http://your.domain.org/abcweb.html?file_name
//# Also works locally with file:///path/to/abcweb.html?file_name
//# **** You have to correct the path to the media file below! (media_file="...";) ****
//########################################
//#
media_file = "J.S. Bach - Cantata BWV 78 Jesu der du meine Seele  1 Chorus.mp3";
offset_js = 0.00;
opt = {"jump":0,"no_menu":0,"repufld":0,"noplyr":false,"nocsr":0,"media_height":"","btns":0,"ipadr":"","mstr":0,"autscl":0,"ctrmed":0,"ctrnot":0,"lncsr":false,"opacity":0.2,"synbox":0,"speed":1,"top_margin":0,"yubvid":"","nomed":0,"delay":0,"repskip":0,"spdctl":0,"lopctl":0,"metro":0};
times_arr = [[0.00,1.98,4.06,6.33,8.31,10.49,12.77,15.05,17.22,19.40],
[19.40,21.58,23.86,25.64,27.71,29.89,32.07,34.15,36.33,38.30,40.28],
[40.28,42.46,44.64,46.72,48.89,51.07,53.05,55.03,57.31,59.58,61.56],
[61.56,63.64,65.92,68.10,70.47,72.85,75.23,77.11,79.19,81.16,83.14],
[83.14,85.62,88.00,90.18,92.25,94.13,96.11,98.09,100.27,102.45,104.92],
[104.92,107.20,109.18,111.63,113.68,115.63,117.78,120.23,122.38,124.23,126.38],
[126.38,128.63,130.68,132.93,135.18,137.33,139.38,141.43,144.08,146.03,148.27],
[148.27,150.52,152.67,154.82,156.87,158.92,161.27,163.32,165.37,167.52,169.67],
[169.67,171.72,173.77,175.92,178.37,180.72,183.17,185.22,187.37,189.72,191.87],
[191.87,194.12,196.27,198.52,200.77,202.92,205.27,207.52,209.77,211.82,214.57],
[214.57,216.72,218.97,221.02,223.07,225.32,227.37,229.52,231.37,233.52,235.67],
[235.67,237.72,239.77,241.91,244.06,246.21,248.26,250.31,252.46,254.51,256.66],
[256.66,259.11,261.16,263.21,265.36,267.61,269.76,272.01,273.86,275.91,278.16],
[278.16,280.31,282.46,284.21,286.36,288.51,290.86,293.01,295.16,297.21,299.76],
[299.76,302.31,304.56,306.71,311.16,314.71]];
abc_arr = ["X:1",
"T:Jesu, der du meine Seele, BWV 78",
"T:Jesu, der du meine Seele",
"C:Johann Sebastian Bach",
"Z:Public domain/ Continuo and Score (c) 2015 by Bernard Greenberg",
"%%scale 0.83",
"%%pagewidth 21.59cm",
"%%leftmargin 1.00cm",
"%%rightmargin 1.00cm",
"%%score [ 1 2 3 ] [ 4 5 6 7 ] [ 8 9 10 11 ] { ( 12 13 14 15 ) 16 }",
"L:1/8",
"Q:1/4=91",
"M:3/4",
"I:linebreak $",
"K:Bb",
"V:1 treble nm=\"Flute\" snm=\"Fl.\"",
"V:2 treble nm=\"Oboe\" snm=\"Ob.\"",
"V:3 treble nm=\"Oboe\" snm=\"Ob.\"",
"V:4 treble nm=\"Violin\" snm=\"Vln.\"",
"V:5 treble nm=\"Violin\" snm=\"Vln.\"",
"V:6 alto nm=\"Viola\" snm=\"Vla.\"",
"V:7 bass nm=\"Violoncello\" snm=\"Vlc.\"",
"L:1/16",
"V:8 treble nm=\"Soprano\" snm=\"S.\"",
"V:9 treble nm=\"Alto\" snm=\"A.\"",
"V:10 treble-8 nm=\"Tenor\" snm=\"T.\"",
"V:11 bass nm=\"Bass\" snm=\"B.\"",
"L:1/4",
"V:12 treble nm=\"Cto Rlz.\" snm=\"Rlz.\"",
"L:1/4",
"V:13 treble ",
"L:1/4",
"V:14 treble ",
"L:1/4",
"V:15 treble ",
"L:1/4",
"V:16 bass-8 nm=\"Vcl/Cb Cto\" snm=\"Cto\"",
"L:1/16",
"V:1",
" z2!mp! d3 b | a2 d3 d | g2 c3 c | c>B c>A d>c | B>G!p! d3 b | a2 d3 d |$ g6- | g>a ^f3 g | g2 z4 | %9",
" z6 | z6 |$ z6 | z6 | z6 | z6 |$ z6 | z6 | z6 | z6 |$ z6 |!f! d'4 d'2 | a4 b2 | c'4 ba |$ %23",
" bc' a3 g | g6 | z6 | z6 | z6 |$ z6 | z6 | z6 | z6 | b4 b2 |$ a4 g2- | g2 ^fg gf/g/ | a6 | %36",
" z2!p! d3 b | a2 d3 d |$ g6- | g>a ^f3 g | g2 z4 | z6 | z6 |$ z6 | z6 | z6 | z6 | z6 |$ z6 | z6 | %50",
" z6 | z6 |$!f! d'4 d'2 | a4 b2 | c'4 ba | bc' a4 | g4 z2 |$ z6 | z6 | z6 | z6 |$ z6 | z6 | z6 | %64",
"!f! b4 b2 |$ a4 g2- | g2 ^fg Tgf/g/ | a6- | adga b2- | b=eag a2- |$ adgfg=e | fg =e3 d | d2 z4 | %73",
" z6 |$ z6 | z6 | z6 |$ z6 | z6 | z6 |$!f! a4 b2 | c'4 a2 |$ b6 | ag g4 | f2!p! c3 a | g2 c3 c |$ %86",
" f6- | fg =e3 f | f2 z4 |$ z6 | z6 |$ z6 | z6 | z6 |$!f! b4 c'2 | d'4 d'2 | e'6 |$ d'c' c'3 b | %98",
" b2!p! d3 B | f2 c3 d | e2 B3 c | d>e c3 B |$ B!mf! (fb)bbb | a(cf)fff | e(gc')c'c'c' | b(dg)ggg |$ %106",
" g^f z4 | z6 | z6 |$ z6 | z6 | z6 |$ z6 | z6 | z6 |$ z6 | z6 |!f! d'4 d'2 | c'4 d'2 |$ %119",
" (bc') c'3 d' | d'6 | z2!mf! a2 a2 |$ ((a2 ^g2)) =g2 | g2 ^fg g>a | a dc'c'c'c' |$ (c'=bf)fff | %126",
" f=ebbbb | (ba_e)eee |$ (ed) z4 | z6 | z6 |$ z6 | z2 z4 | z6 |$ z6 |!f! z6 | d'4 d'2 |$ c'4 ba | %138",
" bc' a3 g | g2!p! d3 b | a2 d3 d | g6- |$[Q:1/4=55] g>a[Q:1/4=50] ^f3[Q:1/4=40] g | g6 |] %144",
"V:2",
" z2 d3 b | a2 d3 d | g2 c3 c | c>B c>A d>c | B>G d3 b | a2 d3 d |$ g6- | g>a ^f3 g | g2!mf! g2 g2 | %9",
" ^f2 =f2 f2 | =e2 _e2 e2 |$ d6- | d2 B2 e2- | e2 A2 d2- | d2 G2 c2- |$ c>B A3 G | G2 z4 | %17",
" z2!mf! d2 b2- | b2 ag a2 |$ z2 a2 d'2- | d'c'babg | a2 d3 d | g2 c3 c |$ dedcBA | B2 z4 |!f! c6- | %26",
" c6 | Bcde f2- |$ f2 edef | dcdede | c=Bcdcd | =BGc_BcA | B!mp! Gedeg |$ e\"^!!\"fdefg | %34",
" d\"^!!!\"ecBcd |\"^||7ths !D-Eb-D bass!!\" cdcedc | B>G d3 b | a2 d3 d |$ g6- | g>a ^f3 g | %40",
" g2!mp! GABc | d2 D=EFG | AGABAG |$ ^F=EFDEF | GBedcB | AB/c/ dcBA | GA/B/ cBAG | ^FGDC D2 |$ %48",
" G2 z4 | z2 .f2 .b2 | z2 .e2 .c'2 | z2 .d2 .d'2 |$ z2!mf! d3 b | a2 d3 d | g2 c3 c | dedcBA | %56",
" B2 z4 |$ z6 | z6 | z6 | z6 |$ z6 | z6 | z6 | z2 b3 e |$ e2 c3 c | g2 c3 c | c>B c>e d>c | %68",
" Bdga b2- | b=eag a2- |$ adgfg=e | f>g =e3 d |!f! d/A/=B/^c/ da- ag/f/ | =e/d/^c/=B/ A2 z2 |$ %74",
" z/ =B/^c/d/ =eb- b/a/g/f/ | =e/d/^c/=B/ A2 z2 | z2!mf! f3 b |$ =e2 e3 a | d2 d3 b | =ed^cdec |$ %80",
" af/g/ ab/c'/ d'2 | z e/f/ ga/b/ c'2 |$ z d/=e/ fg/a/ b2 | z c/d/ =e/f/g/a/ b/a/b/g/ | a2 c3 a | %85",
" g2 c3 c |$ f6- | fg =e3 f | f2 .c2 .g2 |$ z2 .=e2 .A2 | z2 .d2 .a2 |$ z2 .f2 .B2 | z2 .A2 .e2 | %93",
" z2 .d2 .A2 |$ z2 d2 z c/B/ | f2 f2 z f | b2 e2 z c |$ d>e c>d e>f | d2 d3 B | f2 c3 d | e2 B3 c | %101",
" d>e c3 B |$ B (fb)bbb | a z z4 | z (gc')c'c'c' | b z z4 |$ z!mf! ^f/g/ ag/a/ ba/b/ | %107",
" =e/d/e/^f/ gf/g/ ag/a/ | d2 z4 |$ z6 | z E/F/ GF/G/ _AG/A/ | D/C/D/E/ FE/F/ GF/G/ |$ C2 z2 z2 | %113",
" z6 | z2 B2 B2 |$ B2 A2 _A2 | _A2 G=A A3/2G/4A/4 | B2 d3 b | a2 c3 A |$ B>d g>^f g>a | ^f2 z4 | %121",
" z2 a2 a2 |$ (a2 ^g2) =g2 | g2 ^fg g>a | a2 z4 |$ z G ffff | f=e z4 | z F eeee |$ (ed) z4 | z6 | %130",
" z2 B3 g |$ f2 B3 _a | g2 z4 | z6 |$ z2 cBAc | B2 d3 b | a2 d3 d |$ g2 c3 c | dedc BA | B>G d3 b | %140",
" a2 d3 d | g6- |$ g>a ^f3 g | g6 |] %144",
"V:3",
" z2 B3 G | d2 A3 B | c2 G3 A | ^F2 TF3 G | G2 B3 G | d2 A3 =B |$ c2 G3 A | B>c A3 A | G2 z4 | %9",
" z2!mf! A2 d2- | d2 cB c2- |$ c2 A>B c>A | B2 G2 G2 | ^F2 =F2 F2 | =E2 _E2 E2 |$ D>G ^F3 G | %16",
" G2!mf! G2 e2- | e2 dc d2 | z2 c2 a2- |$ ag^f=e d2 | z2 B3 d | d2 A3 A | c2 G3 A |$ BG ^F3 G | %24",
" G2!f! B4- | B6 | _AG^F=E D2- | D2 G2 d2- |$\"^!!? whither 9/8?\" d2 G2 E2 | F2 D2 G2 | C2 F2 _A2 | %31",
" D2 G3 ^F | G!mp! Bedeg |$ efdefg | decBcd | cdcedc | B2 B3 G | d2 A3 =B |$ c2 G3 A | B>c A3 d | %40",
" G2!mp! GABc | d2 D=EFG | AGABAG |$ ^F=EFDEF | GBedcB | AB/c/ dcBA | GA/B/ cBAG | ^FGDC D2 |$ %48",
" G2 z4 | z2 .d2 .g2 | z2 .c2 .a2 | z2 .d2 .a2 |$ z2!mf! B3 d | d2 A3 B | c2 G3 A | BG ^F3 G | %56",
" G2 z4 |$ z6 | z6 | z6 | z6 |$ z6 | z6 | z6 | z2 B3 B |$ c2 A3 G | G2 A3 G | ^F2 F3 F | G2 z d gf | %69",
" g2 z Adc |$ d2 z b =e2- | ed ^c3 d | d2 z4 | z/!f! =E/F/G/ A=e d/c/=B/A/ |$ G/F/=E/D/ ^c2 z2 | %75",
" z/ =B/^c/d/ =ea- a/g/f/e/ | d2!mf! f3 b |$ =e2 e3 a | d2 d3 b | =ed^cdec |$ af/g/ ab/c'/ d'2 | %81",
" z e/f/ ga/b/ c'2 |$ z d/=e/ fg/a/ b2 | z c/d/ =e/f/g/a/ b/a/b/g/ | f2 A3 F | c2 G3 A |$ B2 F3 G | %87",
" AB TG3 A | A2 .A2 .D2 |$ z2 .G2 .D2 | z2 .B2 .E2 |$ z2 .A2 .D2 | z2 .^F2 .c2 | z2 .A2 .D2 |$ %94",
" z2 d2 z c/B/ | f2 f2 z f | b2 e2 z c |$ d>e c>d e>f | d2 F3 d | c2 f3 F | B6- | B>c A3 B |$ %102",
" Bd/e/ fe/f/ gf/g/ | c z z4 | z e/f/ gf/g/ ag/a/ | d z z4 |$ z6 | z6 | z B/c/ dc/d/ ed/e/ |$ %109",
" A/G/A/=B/ cB/c/ dc/d/ | GC/D/ ED/E/ FE/F/ | GF/E/ DC/D/ =ED/E/ |$ F2 F2 F2 | F2 =E2 _E2 | %114",
" E2 D>=E E3/2D/4E/4 |$ F2 CD D3/2C/4D/4 | EDEDE=F | D2 B3 d | e2 A3 d |$ G3 BA>G | d2 d2 d2 | %121",
" d2 ^c2 =c2 |$ =B2 B^c Tc3/2B/4c/4 | d2- d/=e/d/e/ Te3/2d/4e/4 | ^f2 z4 |$ z =B/c/ dddd | dc z4 | %127",
" z A/B/ cccc |$ (cB) z4 | z6 | z2 G3 E |$ c2 D3 B | B2 z4 | z6 |$ z E/F/ G^F/G/ AG/A/ | D2 B3 d | %136",
" d2 A3 B |$ c2 G3 A | Bc ^F3 G | G2 B3 G | d2 A3 =B | c2 G3 A |$ B>c A3 =B | =B6 |] %144",
"V:4",
" z2 d3 b | a2 d3 d | g2 c3 c | c>B c>A d>c | B>G d3 b | a2 d3 d |$ g6- | g>a ^f3 g | %8",
"w: ||||||||",
" g2!p! G,A,B,C | D^CD=EFG | AGABAG |$ ^F=EFDEF | GG,A,B,CB, | A,B,/C/ DCB,A, | G,A,/B,/ CB,A,G, |$ %15",
"w: |||||||",
" ^FGDCDc | B2!mp! .d2 .g2 | z2 .f2 .b2 | z2 .e2 .c'2 |$ z2 .d2 .d'2 | B>G d3 b | a2 d3 d | %22",
"w: |||||||",
"\"^serious hidden 5th\" g2 c3 c |$ dedcBA | B2 z4 | z6 | z6 | z6 |$ z6 | z6 | z6 | z6 | z2 b3 e |$ %33",
"w: |||||||||||",
" e2 d3 d | g2 c3 c | c>B c>e d>c | B>G d3 b | a2 d3 d |$ g6- | g>a ^f3 g | g2 z4 | z2!mp! a2 d'2- | %42",
"w: |||||||||",
" d'2 c'b c'2- |$ c'2 a>b c'>a | b2 g2 g2 | ^f2 =f2 f2 | =e2 _e2 e2 | d>g ^f3 g |$ g2 z4 | %49",
"w: |||||||",
" z2!mf! d2 b2- | b2 ag a2 | z2 a2 d'2- |$ d'c'babg | a2 d3 d | g2 c3 c | dedcBA | B2 z4 |$ %57",
"w: ||||||||",
"!mf! c6- | c6 | Bcde f2- | f2 edef |$ dcdede | c=Bcdcd | =BGc_BcA | BGedef |$ efdcde | decBcd | %67",
"w: ||||||||||",
" cdcedc | BG d2 d2 | ^c2 =c2 c2 |$ =B2 _B2 B2 | Ad ^c3 d | d2 D2 D2 | ^C2 =C2 C2 |$ =B,2 _B,2 B,2 | %75",
"w: ||||||||",
" A,2 A2 A2 | DD/=E/ FG/A/ B2- |$ B=E/D/ EF/G/ A2- | AD/^C/ D=E/F/ G2- | G^C/D/ =E/F/G/A/ BA/G/ |$ %80",
"w: |||||",
" F2 D2 z d | G2 G2 z c |$ F2 F2 z B | AG G3 F | F2 c3 a | g2 c3 c |$ f6- | fg =e3 f | f2 z2 d2 |$ %89",
"w: |||||||||",
" dG z2 A2 | AD z2 e2 |$ eA A2 z B | BA T^F3 G | AE D2 z A |$ BB/c/ dd/e/ f z | z d/e/ fg/_a/ b z | %96",
"w: |||||||",
" z G/A/ Bc/d/ e z |$ z F/G/ A/B/c/d/ e/d/e/c/ | d2 d3 B | f2 c3 d | e2 B3 c | d>e c3 B |$ %102",
"w: ||||||",
" B B,/C/ DC/D/ =ED/E/ | F(cf)fff | eC/D/ =ED/E/ ^FE/F/ | G(dg)ggg |$ g^f z4 | z6 | %108",
"w: ||||||",
" z G,/A,/ B,A,/B,/ CB,/C/ |$ DC/B,/ A,G,/A,/ =B,A,/B,/ | C2 G2 z e | %111",
"w: |||",
" d2\"_non-harmonic tone marked \\\"?\\\" in BGA\" G2 z G |$ c2 c=B/c/ dc/d/ | F2 B2 B2 | z2 B2 B2 |$ %115",
"w: * ? *||||",
" B2 A2 _A2 | _A2 G=A A3/2G/4A/4 | B2 d3 b | a2 c3 A |$ B>d g>^f g>a | ^fD/=E/ ^FE/F/ GF/G/ | %121",
"w: ||||||",
" AG/^F/ =ED/E/ FE/F/ |$ GF/=E/ D^C/D/ ED/E/ | A,d cd/c/ Bc/B/ | ADcccc |$ c=B z4 | z C BBBB | %127",
"w: ||||||",
" (BA) z4 |$ z2 d3 b | a2 d3 c' | b2 z4 |$ z6 | z2 G3 e | d2 G3 f |$ e2 z4 | z2 d3 b | a2 d3 d |$ %137",
"w: ||||||||||",
" g2 c3 c | dedc BA | B>G d3 b | a2 d3 d | g6- |$ g>a ^f3 f | g6 |] %144",
"w: |||||||",
"V:5",
" z2 B3 G | d2 A3 B | c2 G3 A | ^F2 TF3 G | G2 B3 G | d2 A3 =B |$ c2 G3 A | B>c A3 A | %8",
" g2!p! G,A,B,C | D^CD=EFG | AGABAG |$ ^F=EFDEF | GG,A,B,CB, | A,B,/C/ DCB,A, | G,A,/B,/ CB,A,G, |$ %15",
" ^FGDCDF | G2!mp! .B2 .e2 | z2 .d2 .g2 | z2 .e2 .b2 |$ z2 .d2 .a2 | z2 B3 d | d2 A3 A | c2 G3 A |$ %23",
" BG ^F3 G | G2 z4 | z6 | z6 | z6 |$ z6 | z6 | z6 | z6 | z2 B3 B |$ c2 A3 A | G2 A3 A | ^F2 TF3 G | %36",
" A2 B3 G | d2 A3 =B |$ c2 G3 A | B>c A3 d | d2!mp! g2 g2 | ^f2 =f2 f2 | =e2 _e2 e2 |$ d6- | %44",
" d2 B2 e2- | e2 A2 d2- | d2 G2 c2- | c>B A3 G |$ G2!mf! G2 e2- | e2 dc d2 | z2 c2 a2- | %51",
" ag^f=e d2 |$ z2 G3 B | d2 A3 B | c2 G3 A | BG ^F3 G | G2!mf! B4- |$ B6 | _AG^F=E D2- | D2 G2 d2- | %60",
"\"^!! no res.\" d2 G2 E2 |$ F2 D2 G2 | C2 F2 _A2 | D2 G3 ^F | G2 B3 B |$ c2 A3 G | G2 A3 G | %67",
" ^F2 F3 F | G6- | G2 A4 |$ ^F2 G4 | =F2 =E3 F | F2 D2 D2 | ^C2 =C2 C2 |$ =B,2 _B,2 B,2 | %75",
" A,2 A2 A2 | DD/=E/ FG/A/ B2- |$ B=E/D/ EF/G/ A2- | AD/^C/ D=E/F/ G2- | G^C/D/ =E/F/G/A/ BA/G/ |$ %80",
" F2 D2 z D | C2 C2 z C |$ B,2 B,2 z =E | FG =E3 F | F2 A3 F | c2 G3 A |$ B2 F3 G | AB G3 A | %88",
" A2 z2 F2 |$ F=E z2 C2 | CB, z2 A2 |$ GA F2 z D | DC E2 z E | EA, A,2 z D |$ GB/c/ dd/e/ f z | %95",
" z d/e/ fg/_a/ b z | z G/A/ Bc/d/ e z |$ z F/G/ A/B/c/d/ e/d/e/c/ | d2 F3 d | c2 f3 F | B6- | %101",
" B>c A3 F |$ F B,/C/ DC/D/ =ED/E/ | FA/B/ cB/c/ dc/d/ | GC/D/ =ED/E/ ^FE/F/ | GB/c/ dc/d/ ed/e/ |$ %106",
" A2 z4 | z6 | z6 |$ z6 | z2 E2 z c | G2 D2 z =E |$ F2 F2 F2 | F2 =E2 _E2 | DB,/C/ DC/D/ =ED/E/ |$ %115",
" F_E/D/ CB,/C/ DC/D/ | EDEDE=F | D2 B3 d | e2 A3 d |$ G3 BA>G | d^F/G/ AG/A/ BA/B/ | %121",
" =E/D/E/^F/ GF/G/ AG/A/ |$ D/^C/D/=E/ FE/F/ GF/G/ | AB AB/A/ GA/G/ | ^F/=E/F/G/ AAAA |$ AG z4 | %126",
" z =E/F/ GGGG | (GF) z4 |$ z2 B3 G | c2 ^F3 d | d2 z4 |$ z6 | z2 E3 C | _A2 =B,3 G |$ G2 z4 | %135",
" z2 B3 d | d2 A3 B |$ c2 G3 A | Bc ^F3 G | G2 B3 G | d2 A3 =B | c2 G3 A |$ B>c A3 =B | =B6 |] %144",
"V:6",
" z2 G3 D | D2 D3\"^*!!\" A | G2 G3 G, | A,2 D3 D | D2 G3 D | D2 D3\"^*!!!\" _A |$ G2 C>=A, B,>C | %7",
" D>C D>E D>C | B,2!p! G,A,B,C | D^CD=EFG | AGABAG |$ ^F=EFDEF | GG,A,B,CB, | A,B,/C/ DCB,A, | %14",
" G,A,/B,/ CB,A,G, |$ ^F,G,DCDD, | G,2!mp! .G2 .G,2 | z2 .A2 .D2 | z2 .c2 .C2 |$ z2 .A2 .^F2 | %20",
" z2 G3 G | D2 D3 G | G2 E3 E |$ B,A,/B,/ CEDC | B,2 z4 | z6 | z6 | z6 |$ z6 | z6 | z6 | z6 | %32",
" z2 G3 G |$\"^almost ||\" A2 F3 D |\"^!!\" =E2 T^F3 G | A2 D3 D | D2 G3 D | D2 D3 _A |$ G2 C>A, B,>C | %39",
" D>C D>E D>C | B,2 z4 | z6 | z6 |$ z6 | z6 | z6 | z6 | z6 |$ z6 | z2!mf! .A2 .D2 | z2 .c2 .C2 | %51",
" z2 .A2 .^F2 |$ z2 G3 G | D2 D3 G | G2 E3 E |\"^cf. tenor line\" B,A,/B,/ CE DC | B,2 z2 z2 |$ z6 | %58",
" z6 | z6 | z6 |$ z6 | z6 | z6 | z2 G3 G |$\"^=alto\" A2 D3 D | =E2\"^=sop\" T^F3 G | A2 D3 D | D6 | %69",
" =E2 T^F4 |$ D4 =E2 | A,2 A,2 A,2 | A,2 D2 D2 | ^C2 =C2 C2 |$ =B,2 _B,2 B,2 | A,2 A2 A2 | %76",
" DA,/G,/ A,B,/C/ DE/F/ |$ G2- GA,/B,/ CD/=E/ | F2- FG,/A,/ B,C/D/ | ^C/D/=E/F/ G3 F/E/ |$ %80",
" D2 A,2 z G, | G,2 G,2 z F, |$ F,2 F,2 z B, | C2 C2 C2 | F2 C3 C | C2 C3 F |$ F2 B,3 B, | %87",
" C>B, C>D C>B, | A,2 z2 .G,2 |$ .G,2 z2 .D,2 | D,2 z2 .A,2 |$ .A,2 .D2 z G, | .=E,2 .C2 z C | %93",
" CE ^F,2 z D |$ D2 z =F/G/ FE | DB, z B,/C/ DE/F/ | G2 z E/F/ _GE |$ F2 z E/D/ CF | F2 B,3 F, | %99",
" F,2 F,3 B, | B,2 E3 E | F>E F>G F>E |$ D B,/C/ DC/D/ =ED/E/ | FFFCGG | GC/D/ =ED/E/ ^FE/F/ | %105",
" GGGDAA |$ A2 z4 | z6 | z6 |$ z6 | z2 C2 z _A | D2 =B,2 z C |$ C2 _E2 D2 | C2 B,2 F2 | %114",
" F3 E/F/ GF/G/ |$ C/B,/C/D/ EF/E/ DE/F/ | B,2 G2\"^!!! not in fig,\" ^F2 | G2 G3 G | C2 E3 A, |$ %119",
" D2 =E2 D2 | A2 c2 B2 | G2 B2 A2 |$ G2 F2 =E2 | D2 A,2 B,2 | z D/=E/ ^FF/G/ AD |$ %125",
" DG,/A,/ =B,B,/C/ DG, | GC/D/ =EE/F/ GC | CF,/G,/ A,A,/B,/ CF, |$ F D/E/ ^FG/A/ B2 | %129",
" z ^F/G/ AB/c/ dF | GB,/C/ D_E/F/ G2 |$ z D/E/ FG/A/ B2 | z G,/_A,/ B,C/D/ E2 | %133",
" z =B,/C/ DE/F/ GD |$ C2 z4 | D2 G3 D | D2 D3 D |$ =E^F G3 G | G_E A,2 D2 | D2 G3 D | D2 D3 _A | %141",
" G2 C>A, B,>C |$ D>E D2 D2 | D6 |] %144",
"V:7",
" G,,4 G,4 G,4 | ^F,4 =F,4 F,4 | =E,4 _E,4 E,4 | D,2E,2D,2C,2B,,2A,,2 | G,,4 G,4 G,4 | %5",
" ^F,4 =F,4 F,4 |$ =E,4 _E,4 E,4 | D,4 D,,4 D,,4 | G,,4 z8 | z12 | z12 |$ z12 | z12 | z12 | z12 |$ %15",
" z12 | z2!mf! G,,A,, B,,2A,,B,, C,2B,,C, | D,2D,=E, F,2E,F, G,2F,G, | A,4- A,2B,A, G,2A,G, |$ %19",
" ^F,4- F,2D,E, F,2=E,F, | G,4 G,4 G,4 | ^F,4 =F,4 F,4 | =E,4 _E,4 E,4 |$ D,4 D,,4 D,,4 | %24",
" G,,2D,2G,2F,2E,2D,2 | C,2G,2C2B,2_A,2G,2 | F,2E,2D,2C,2B,,2A,,2 | G,,2_A,,2G,,2F,,2E,,2D,,2 |$ %28",
" C,,4 C,4 C,4 | =B,,4 _B,,4 B,,4 | A,,4 _A,,4 A,,4 | G,,12- | G,,4 G,4 G,4 |$ ^F,4 =F,4 F,4 | %34",
" =E,4 _E,4 E,4 | D,2E,2D,2C,2B,,2A,,2 | G,,4 G,4 G,4 | ^F,4 =F,4 F,4 |$ =E,4 _E,4 E,4 | %39",
" D,4 D,,4 D,,4 | G,,4 z8 | z12 | z12 |$ z12 | z12 | z12 | z12 | z12 |$ %48",
" z2!mf! G,,A,, B,,2A,,B,, C,2B,,C, | D,2D,=E, F,2E,F, G,2F,G, | A,4- A,2B,A, G,2A,G, | %51",
" ^F,4- F,2D,=E, F,2E,F, |$ G,4 G,4 G,4 | ^F,4 =F,4 F,4 | =E,4 _E,4 E,4 | D,4 D,,4 D,,4 | %56",
" G,,2D,2G,2F,2E,2D,2 |$ C,2G,2C2B,2_A,2G,2 | F,2E,2D,2C,2B,,2A,,2 | G,,2_A,,2G,,2F,,2E,,2D,,2 | %60",
" C,,4 C,4 C,4 |$ =B,,4 _B,,4 B,,4 | A,,4 _A,,4 A,,4 | G,,12- | G,,4 G,4 G,4 |$ ^F,4 =F,4 F,4 | %66",
" =E,4 _E,4 E,4 | D,12- | D,12- | D,12- |$ D,8 ^C,4 | D,4 A,4 A,,4 | D,,2D,=E, F,2E,F, G,2F,G, | %73",
" A,2A,,=B,, C,2B,,C, D,2C,D, |$ =E,4- E,2F,E, D,2E,D, | ^C,4- C,2A,,=B,, C,2B,,C, | D,4 D4 D4 |$ %77",
" ^C4 =C4 C4 | =B,4 _B,4 B,4 | A,4 A,,4 A,,4 |$ D,2=E,2 F,4 F,4 | =E,4 _E,4 E,4 |$ D,4 _D,4 D,4 | %83",
" C,4 C,,4 C,,4 | F,,4 F,4 F,4 | =E,4 _E,4 E,4 |$ D,4 _D,4 D,4 | C,4 C,,4 C,,4 | %88",
" F,,2!mf!F,G, A,2G,A, =B,2A,B, |$ C2C,D, =E,2D,E, ^F,2E,F, | G,2G,,A,, B,,2A,,B,, C,2B,,C, |$ %91",
" D,2D,,=E,, F,,2E,,F,, G,,2F,,G,, | A,,4- A,,2B,,A,, G,,2A,,G,, | ^F,,4- F,,2D,,=E,, F,,2E,,F,, |$ %94",
" G,,4 B,4 B,4 | A,4 _A,4 A,4 | G,4 _G,4 G,4 |$ F,4 F,,4 F,,4 | B,,4 B,4 B,4 | A,4 _A,4 A,4 | %100",
" G,4 _G,4 G,4 | F,4 F,,4 F,,4 |$ B,,2 z2 z8 | z2 F,G, A,2G,A, =B,2A,B, | C2 z2 z8 | %105",
" z2 G,A, B,2A,B, C2B,C |$ D2D,=E, ^F,2E,F, G,2F,G, | A,2G,^F, =E,2D,E, F,2E,F, | G,4 F,4 E,4 |$ %109",
" D,4 z4 D,4 | C,4 C4 C4 | C4 =B,4 _B,4 |$ B,2F,G, A,2G,A, =B,2A,B, | C2B,A, G,2F,G, A,2G,A, | %114",
" B,6 B,A, G,2A,G, |$ F,4- F,E,D,C, B,,2D,B,, | E,4- E,F,E,D, C,2B,,C, | G,,4 G,4 G,4 | %118",
" G,4 ^F,4 =F,4 |$ F,4 =E,4 _E,4 | D,12- | D,12- |$ D,12- | D,12- | D,6 D,,=E,, ^F,,2E,,F,, |$ %125",
" G,,6 G,A, =B,2A,B, | C6 C,D, =E,2D,E, | F,6 F,,G,, A,,2G,,A,, |$ B,,2B,,C, D,2=E,^F, G,4 | %129",
" z2 A,,B,, C,2D,=E, ^F,4 | z2 G,,A,, B,,2C,D, E,4 |$ z2 F,,G,, _A,,2B,,C, D,4 | %132",
" z2 E,,F,, G,,2A,,=B,, C,4 | z2 D,,E,, F,,2G,,A,, =B,,4 |$ z2 C,,D,, =E,,2D,,E,, ^F,,2E,,F,, | %135",
" G,,4 G,4 G,4 | ^F,4 =F,4 F,4 |$ =E,4 _E,4 E,4 | D,4 D,,4 D,,4 | G,,4 G,4 G,4 | ^F,4 =F,4 F,4 | %141",
" =E,4 _E,4 E,4 |$ D,2>C,2 D,4 D,,4 | G,,12 |] %144",
"V:8",
" z6 | z6 | z6 | z6 | z6 | z6 |$ z6 | z6 | z6 | z6 | z6 |$ z6 | z6 | z6 | z6 |$ z6 | z6 | z6 | z6 |$ %19",
"w: |||||||||||||||||||",
" z6 |!ff! d4 d2 | A4 B2 | c4 BA |$ Bc A3 G | G6 | z6 | z6 | z6 |$ z6 | z6 | z6 | z6 | B4 B2 |$ %33",
"w: |Je- su,|der du|mei- ne *|See- * * *|le||||||||hast durch|",
" A4 G2- | G2 ^FG GF/G/ | A6 | z6 | z6 |$ z6 | z6 | z6 | z6 | z6 |$ z6 | z6 | z6 | z6 | z6 |$ z6 | %49",
"w: dei- nen|* bit- * tern * *|Tod||||||||||||||",
" z6 | z6 | z6 |$!ff! d4 d2 | A4 B2 | c4 BA | (Bc A4) | G6 |$ z6 | z6 | z6 | z6 |$ z6 | z6 | %63",
"w: |||Aus des|Teu- fels|fin- strer *|Höh- * *|le|||||||",
"!ff! z6 | B4 B2 |$ A4 G2- | G2 ^FG TGF/G/ | A6 | z6 | z6 |$ z6 | z6 | z6 | z6 |$ z6 | z6 | z6 |$ %77",
"w: |Und der|schwer- en|* Seel- * en- * *|noth,||||||||||",
" z6 | z6 |!ff! z6 |$ A4 B2 | c4 A2 |$ B6 | AG G4 |\"^[sic, length]\" F6 | z6 |$ z6 | z6 | z6 |$ z6 | %90",
"w: |||kräft- ig-|lich her-|aus-|ge- * ris-|sen||||||",
" z6 |$ z6 | z6 | z6 |$!ff! B4 c2 | d4 d2 | e6 |$ dc (c3 B) | B6 | z6 | z6 | z6 |$ z6 | z6 | z6 | %105",
"w: ||||und mich|Sol- ches|las-|sen * wis- *|sen|||||||",
" z6 |$ z6 | z6 | z6 |$ z6 | z6 | z6 |$ z6 | z6 | z6 |$ z6 | z6 |!ff! d4 d2 | c4 d2 |$ %119",
"w: ||||||||||||Durch dein|an- ge-|",
" (Bc) (c3 B/c/) | d6 | z6 |$ z6 | z6 | z6 |$ z6 | z6 | z6 |$ z6 | z6 | z6 |$ z6 | z6 | z6 |$ z6 | %135",
"w: neh- * mes * *|Wort|||||||||||||||",
" z6 |!ff! d4 d2 |$ c4 BA | Bc (A3 G) | G6 | z6 | z6 |$ z6 | z6 |] %144",
"w: |Sei doch|jetzt, o *|Gott, * mein *|Hort.|||||",
"V:9",
" z6 | z6 | z6 | z6 | z6 | z6 |$ z6 | z6 | z6 | z6 | z6 |$ z6 | z6 | z6 | z6 |$ z6 | z2!f! G2 G2 | %17",
"w: ||||||||||||||||Je- su|",
" ^F2 =F4 | =ED_EG FE |$ D=E^FG A2- | A2 G^F G2 | z2 A2 G2 | G3 ^F G2- |$ G A ^F3 G | G2 D2 D2 | %25",
"w: der du|mei- * * * ne *|See- * * * *|* * * le|Je- su,|der du mei-|* ne See- *|le hast durch|",
" E2 =E4 | F2 ^F4 | G6- |$ G2 E2 _A2- | A2 GF G2- | G2 FE F2 | (G3 ^F GA | D2) G2 G2 |$ A2 D4- | %34",
"w: dein- en|bit- tern|Tod|* hast durch|* dein- * en|* bit- * tern|Tod, * * *|||",
" D2 A2 G2 | ^F6 | z2 z4 | z6 |$ z6 | z6 | z6 | z6 | z6 |$ z6 | z6 | z6 | z6 | z6 |$ z2!f! G2 G2 | %49",
"w: ||||||||||||||Aus des|",
" ^F2 =F4 | =ED_EG FE | D=E^FG A2- |$ A2 G^F G2 | z2 A2 G2 | G3 ^F G2- | GA (^F3 G) | G2 D2 D2 |$ %57",
"w: Teu- fels|fin- * * * strer *|Hôh- * * * *|* * * le|Aus des|Teu- fels fin-|* strer Höh- *|le Und der|",
" E2 =E4 | F2 ^F4 | G6- | G2 E2 _A2- |$ A2 GF G2- | G2 (FE F2) | (G3 ^F) GA | D2 G2 G2 |$ A2 D4- | %66",
"w: schwer- en|Seel- en-|noth|* Und der|* schwer- * *|* ren * *|Seel- * en- *|noth, Und der|schwer- en|",
" D2 A2 G2 | ^F6 | z6 | z6 |$ z6 | z6 | z6 | z2 =E2 F2 |$ G A B2 G2 | A6- | A D/ =E/ FG/A/ B2- |$ %77",
"w: * Seel- en-|noth,||||||kräft- ig-|lich her- aus- ge-|ris-|* sen, her- aus- * * *|",
" B =E/D/ (EF/G/ A2- | A) D/ ^C/ (D=E/F/ G2- | G^C/D/ =E/F/G/A/ B) A/G/ |$ F F z D G/F/=E/D/ | %81",
"w: * ge- * ris- * * *|* sen, her- aus- * * *|* * * * * * * * ge- *|ris- sen, her- aus, * * *|",
" C z z C F/_E/D/C/ |$ B,2 z B, F/=E/F/G/ | AF (=E3 F) | F2 z4 | z6 |$ z6 | z6 | %88",
"w: * her- aus, * * *|* her- aus- * * *|ge- * ris- *|sen||||",
"!f! C!f! F F F F F |$ F =E/ F/ (G^F/G/ AG/A/ | D=E/^F/G) B A c |$ cA D D G2- | G^F/=E/F F G G | %93",
"w: und mich Sol- ches las- sen|wis- sen, mich Sol- * * * * *|* * * * ches las- sen|wis- * sen, mich Sol-|* * * * ches las- sen|",
" A6- |$ A G/ ^F/ G G A A | (B6- | B6- |$ Bc A3 B) | B6 | z6 | z6 | z6 |$ z6 | z6 | z6 | z6 |$ z6 | %107",
"w: wis-|* sen, mich Sol- ches las- sen|wis-|||sen|||||||||",
" z6 | z2!f! G2 G2 |$ (G2 ^F2) =F2 | (F2 EF TF3/2) E/4F/4 | G2 D2 =E2 |$ (F2 _E2) D2 | G4 F2 | %114",
"w: |durch dein|an- * ge-|neh- * * * mes *|Wort, durch dein|an- * ge-|neh- mes|",
" F2 B2 B2 |$ (B2 A2) _A2 | (_A2 G=A TA3/2) G/4A/4 | B2 B2 G2 | A4 A2 |$ (G3 B) AG | d2 z4 | z6 |$ %122",
"w: Wort, durch dein|an- * ge-|neh- * * * mes *|Wort, durch dein|an- ge-|neh- * mes *|Wort||",
" z6 | z6 | z6 |$ z6 | z6 | z6 |$ z6 | z6 | z2!f! B A G B |$ _A2 TF4 | G2 E2 =A2- | A=B B4 |$ %134",
"w: ||||||||Sei doch jetzt, o|Gott, mein|Hort, o Gott|* * mein|",
" c3 _B A c | B2 B A B G | A3 G A F |$ G6- | G A ^F3 G | G6 | z6 | z6 |$ z6 | z6 |] %144",
"w: Hort, o Gott, mein|Hort, sei doch jetzt o|Gott, o Gott, mein|Hort|* o Gott, mein|Hort.|||||",
"V:10",
" z6 | z6 | z6 | z6 | z6 | z6 |$ z6 | z6 | z6 | z6 | z6 |$ z6 | z6 | z6 | z6 |$ z6 | z6 | %17",
"w: |||||||||||||||||",
"!f! z2 d2 d2 | ^c2 =c4- |$ cA dc BA | BABc d2 | z2 d2 d2 | c3 d e2 |$ B2 cedc | B2 z4 | z2 G2 G2 | %26",
"w: Je- su,|der du|* * mei- * ne *|See- * * * le|||||hast durch|",
" _A2 =A4 | B2 =B4 |$ c2 z2 c2 | (d2 G2) d2 | (e2 c2) (f2- | f2 edec | d2) e2 e2- |$ e2 A2 =B2- | %34",
"w: dein- en|bit- tern|Tod durch|dein- * en|bit- tern Tod||||",
" B2 c2 G2 | d6 | z6 | z6 |$ z6 | z6 | z6 | z6 | z6 |$ z6 | z6 | z6 | z6 | z6 |$ z6 | z2!f! d2 d2 | %50",
"w: |||||||||||||||Aus des|",
" ^c2 =c4 | cAdc BA |$ BABc d2 | z2 d2 d2 | c3 d e2 | B2 cedc | B2 z4 |$ z2 G2 G2 | _A2 =A4 | %59",
"w: Teu- fels|fin- * * * strer *|Höh- * * * le|||||Und der|schwer- en|",
" B2 T=B4 | c2 z2 c2 |$ (d2 G2) d2 | (e2 c2) f2 | (f2 edec | d2) e2 e2 |$ (e2 A2) =B2- | B2 c2 G2 | %67",
"w: Seel- en-|noth der|schwer- * en|Seel- * en-|noth, * * * *|* Und der|schwer- * en|* Seel- en-|",
" d6 | z6 | z6 |$ z6 | z6 | z2 A2 =B2 | ^c d =e2 A2 |$ =ef g4- | g f =e d e A | %76",
"w: noth,|||||kräft- ig-|lich her- aus- ge-|ris- * *|* sen, kräft- ig- lich her-|",
" (dA/G/ AB/c/ de/f/ |$ g3) A/B/ (cd/=e/ | f3) G/ A/ (Bc/d/ | ^c/d/=e/f/ g3) f/e/ |$ %80",
"w: aus- * * * * * * * *|* ge- * ris- * *|* sen, her- aus- * *|* * * * * ge- *|",
" d A/ A/ d/c/B/A/ G z | z G c/B/A/G/ F z |$ z F B/A/G/F/ _d z | z G c2 c2 | c A z4 | z6 |$ z6 | %87",
"w: ris sen, her- aus, * * * *|her- aus, * * * *|her- aus, * * * *|her- aus- ge-|ris- sen|||",
" z6 | z6 |$!f! G c c c c c | c B/ c/ (dc/d/ ed/e/ |$ AB/c/d) d d d | (dc/B/ c4- | cB/A/d) d c c |$ %94",
"w: ||und mich Sol- ches las- sen|wis- sen, mich Sol- * * * * *|* * * * ches las- sen|wis- * * *|* * * * sen, und mich|",
" B/c/B/A/G d e e | f4 f2 | z2 B A B c |$ dc/B/c F f2 | f6 | z6 | z6 | z6 |$ z6 | z6 | z6 | z6 |$ %106",
"w: Sol- * * * * ches las- sen|wis- sen|und mich Sol- ches|las- * * * sen wis-|sen||||||||",
" z2!f! d2 d2 | (d2 ^c2) =c2 | (c2 Bc Tc3/2) B/4c/4 |$ d2 A2 =B2 | c=Bcd Bc | (d2 _a2) g2 |$ %112",
"w: durch dein|an- * ge-|neh- * * * mes *|Wort, durch dein|an- * * * ge- *|neh- * mes|",
" c2 f2 f2 | (f2 =e2) _e2 | (e2 d=e Te3/2) d/4e/4 |$ f2 c2 d2 | e d ef e=f | d2 d2 B2 | e4 d2 |$ %119",
"w: Wort, durch dein|an- * ge-|neh- * * * mes *|Wort, durch dein|an- ge- neh- * mes *|Wort, durch dein|an- ge-|",
" (d2 cd) e2 | A2 z4 | z6 |$ z6 | z6 | z6 |$ z6 | z6 | z6 |$ z2!f! d c B e | c2 TA4 | B2 G2 (c2- |$ %131",
"w: neh- * * mes|Wort||||||||Sei doch jetzt, o|Gott, mein|Hort, o Gott|",
" cd) Td4 | e2 e d c e | d3 c d G |$ g2 G2 d2 | d2 d c d B | d =e f3 c |$ G3 A B c | BA d2 d2 | d6 | %140",
"w: * * mein|Hort, Sei doch jetzt, o|Gott, o Gott, mein|Hort, Gott mein|Hort, sei doch jetzt o|Gott, mein Hort, o|Gott, o Gott, mein|Hort, o Gott, mein|Hort.|",
" z6 | z6 |$ z6 | z6 |] %144",
"w: ||||",
"V:11",
" z3 | z3 | z3 | z3 | z3 | z3 |$ z3 | z3 | z3 | z3 | z3 |$ z3 | z3 | z3 | z3 |$ z3 | z3 | z3 | z3 |$ %19",
"w: |||||||||||||||||||",
" z3 | z!f! G, G, | ^F, =F,2 | =E, _E,2 |$ D,3 | G,,2 z | z3 | z3 | z3 |$ z3 | z3 | z3 | z3 | %32",
"w: |Je- su,|der du|mein- e|Seel-|e||||||||",
" z G, G, |$ ^F, =F,2 | =E, _E,2 | D,3 | z3 | z3 |$ z3 | z3 | z3 | z3 | z3 |$ z3 | z3 | z3 | z3 | %47",
"w: hast durch|dein- en|bit- tern|Tod||||||||||||",
" z3 |$ z3 | z3 | z3 | z3 |$ z!f! G, G, | ^F, =F,2 | =E, _E,2 | D,3 | G,,3 |$ z3 | z3 | z3 | %60",
"w: |||||Aus des|Teu- fels|fin- strer|Höh-|le||||",
" z C, C, |$ =B,, _B,,2 | A,, _A,,2 | G,,3- | G,, G, G, |$ ^F, =F,2 | =E, _E,2 | D,3 | z3 | z3 |$ %70",
"w: Und der|schwer- en|Seel- en|Noth,|* Und der|schwer- en|Seel- en-|noth|||",
" z3 | z3 | z3 | z3 |$ z ^C, D, | =E,/ F,/ G, A, | F,/ D,/ D D |$ ^C z/ =C,/ =C/ C/ | %78",
"w: ||||kräft- ig-|lich her- aus- ge-|ris- sen, kräft- ig-|lich her- aus- ge-|",
" =B,/A,/ _B,/ B,,/ B,/ B,/ | A, A,, z |$ z F, F, | =E, _E,2 |$ D, _D,2 | (C,3/2 B,,/ C,) | F, z2 | %85",
"w: ris- * sen, her- aus- ge-|ris- sen|kräft- ig-|lich her-|aus- ge-|ris- * *|sen|",
" z3 |$ z3 | z3 | z3 |$ z3 |!f! D,/ G,/ G,/ G,/ G,/ G,/ |$ G,/ F,/4 G,/4 (A,/G,/4A,/4 B,/A,/4B,/4 | %92",
"w: |||||und mich Sol- ches las- sen|wis- sen, mich Sol- * * * * *|",
" =E,/^F,/4G,/4A,/) B,/ A,/ G,/ | (^F,- F,/D,/4=E,/4 F,/E,/4F,/4 |$ G,/) A,/ B, B, | A, _A,2 | %96",
"w: * * * * ches las- sen|wiss- * * * * * *|* sen, und mich|Sol- ches|",
" G, _G,2 |$ (F,3/2 E,/ F,) | B,3 | z3 | z3 | z3 |$ z3 | z3 | z3 | z3 |$ z3 | z3 | z3 |$ z3 | %110",
"w: las- sen|wis- * *|sen||||||||||||",
" z!f! C C | (C =B,) _B, |$ (B, A,/=B,/ TB,3/4) A,/8B,/8 | C G, A, | (B, A,) G, |$ F, F, B, | %116",
"w: durch dein|an- * ge-|neh- * * * mes *|Wort, durch dein|an- * ge-|neh- mes, dein|",
" E,/ G,/ E, C, | G,, G, G, | (G, ^F,) =F, |$ (F, =E,) _E, | D,3 | z3 |$ z3 | z3 | z3 |$ z3 | z3 | %127",
"w: an- ge- neh- mes|Wort, durch dein|an- * ge-|neh- * mes|Wort|||||||",
" z3 |$ z3 | z3 | z3 |$ z3 | z!f! G,/ F,/ E,/ G,/ | F, D,2 |$ C, =E, ^F, | G, G, G, | ^F, z =F, |$ %137",
"w: |||||Sei doch jetzt, o|Gott, mein|Hort, Gott, mein|Hort, sei doch|jetzt, mein|",
" =E, z _E, | D,/C,/ D,2 | G,,3 | z3 | z3 |$ z3 | z3 |] %144",
"w: Hort o|Gott, * mein|Hort.|||||",
"V:12",
"!mf!\"^Continuo realization by BSG, 5/20/15\" [GBd]2 [GBd] | [DAd]2 [FAd] | [CGc]2 [CGc] | %3",
" [D^Fc]2 [DFc] | [DGB]2 [GBd] | [DAd]2 [DAd] |$ [Gc]2 [G-c] | [GB] A3/2 G/ | G z2 | z3 | z3 |$ z3 | %12",
" z3 | z3 | z3 |$ z3 | z!mf! [Bd] [A-e] | [Ad-] [Ad-] [Bd] | [A^c] [A=c]2- |$ [D-A-c]3 | %20",
" [DB]2 [Bd] | [Ad]2 [Ad] | c2 B/A/ |$ [DGB] [D^FA]2 | [B,G] [DG-B-]2 | [EB] [=EB]2 | %26",
" [F_A] [^F=A]2 | [GB] [D=B]2 |$\"_JSB did not figure this susp.\"\"_*\" [Gc]2 [_A-c] | %29",
" [FAd-] [DGd] [DG-d] | [EGc-] [CFc] [CF-c] | [DF=B] [EGc]2 | [DGB] [GBe] [GBe-] |$ %33",
" [Ace] [DAd-] [G=Bd]- | [GBd] [^FAc] [CGc-] | [D^Fc]3 | [DGB]2 [GBd] | [DAd]2 [=FAd] |$ %38",
" [CGc]2 [CGc-] | [Dc]2 [Dc] | [DB] z2 | z3 | z3 |$ z3 | z3 | z3 | z3 | z3 |$ z!mf! [Bd] [Ae]- | %49",
" [A-e] [Ad-] [Bd] | [A^c] [A=c]2- | [DA-c]3 |$ [DB]2 [Bd] | [Ad]2 [Ad] | c2 B/A/ | [DGB] [D^FA]2 | %56",
" [B,G] [DG-B-]2 |$ [EB] [=EB]2 | [F_A] [^F=A]2 | [GB] [D=B]2 |\"^**\" [Gc]2 [_Ac] |$ %61",
" [F_Ad-] [DGd] [DG-d] | [EGc-] [CFc] [CF-c] | [DF=B] [EGc]2 | [DGB] [GBe] [GBe-] |$ %65",
" [Ace] [DAd-] [G=Bd]- | [GBd] [^FAc] [CGc-] | [D-^Fc]3 | [DGB]2 [G-B-d] | [=EGB^c] [D-^FA-=c]2 |$ %70",
" [D-A=B] [DG_B] [GB=e] | [FAd] [=EA^c]2 | [FAd]2 [F=Bd] | [=E-A-^c] [EA=c] [DFc] |$ %74",
" [=B,G-=B] [=E-G-_B]2 | [EGA]3 | [FA]2 [Fd] |$ [=E=e]2 [Ee] | [Fd-] [DGd] [DG-d] | %79",
" [=EG^c]2 [EGc] |$ [DFd]2 [G=Bd] | [CGc]2 [FAc] |$ [F-B-d] [FBf] [FBf-] | [Acf] [Gc=e]2 | %84",
"!mp! [Acf]2!mp! [Acf] | [Gcg]2 [Gcg] |$ [B-df-] [FBf] [FBf-] | f =e3/2 f/ |!mf! [Acf]2 [Gdf-] |$ %89",
" f/=e/ e d- | [Gd] [Bd] [Ae] |$ [Ad]2 [Bd] | [Ac]2 e | d3- |$ [Bd]2 [B-c] | [Bd]2 [Bd] | %96",
" [Be]2 [Be] |$ d c3/2 B/ | B!mp! [Bd] [Bd] | [cf]2 [cf] | [Be]2 e | d c3/2 B/ |$ B/ z/ z2 | %103",
" z!mf! [Acf] [Gdf] | [Gce] z2 | z [GBd] [G-A-e] |$ [Ad] d2 | [Ad] [G^c] [A=c] | c B c |$ A2 =B | %110",
" [Gc]2 [_Ac] | [Gd] [df] [c=e] |$ [c-f] [c_e] [G-d] | [G-c] [GB] [F-c] | [FB]2 [GB-] |$ B A [df] | %116",
" [Be]2 [ce] | d2 d | [Ace]2 [DAd] |$ [GBd] [Gc]2 | A/B/ c B- | B A [A=c] |$ %122",
" [Ac]\"^!!! g-g#-g\" [D^G=B] [=E=G-^c] | [Ad]2 ^c | d c2- |$ c/=B/ f2- | f/=e/ [Bc]2- | %127",
" B/A/ [Fe]2- |$ e/d/ [Bd]2 | [Ac]3 | [GB]2 [Gc] |$ [_Ac]2 [AB] | e/d/4c/4 B/c/4d/4 =A/B/4c/4 | %133",
" d/d/4c/4 =B/B/4=A/4 G/A/4B/4 |$ [Gc]/[Ae]/4[=Bd]/4 c2 |!mf! [GBd]2 [GBd] | [DAd]2 [=FAd] |$ %137",
" [CGc]2 [CGc] | B A3/2 G/ | [B,DG]2!mp! [GBd] | [DAd]2 [FAd] | [Gc]2 [Gc] |$ B A3/2 G/ | %143",
" [=B,DG]3 |] %144",
"V:13",
" x3 | x3 | x3 | x3 | x3 | x3 |$ =E C/D/ _E/C/ | D- [D^F]2 | [B,D] z2 | x3 | x3 |$ x3 | x3 | x3 | %14",
" x3 |$ x3 | x G2 | ^F =F2 | =E/D/ _E2 |$ x3 | A G/^F/ G | D/=E/ F F | C3/2 D/ E/C/ |$ x3 | x3 | %25",
" G2 C- | C D3/2 C/ | B, G F- |$ F E E | x3 | x3 | x3 | x3 |$ x3 | x3 | x3 | x3 | x3 |$ x3 | %39",
" ^F2- F/G/ | G z2 | x3 | x3 |$ x3 | x3 | x3 | x3 | x3 |$ x G2 | ^F =F2 | =E/D/ _E2 | x3 |$ %52",
" A G/^F/ G | D/=E/ F F | C3/2 D/ E/C/ | x3 | x3 |$ G2 C- | C D3/2 C/ | B, G F- | F E E |$ x3 | x3 | %63",
" x3 | x3 |$ x3 | x3 | x3 | x3 | x3 |$ x3 | x3 | x3 | x3 |$ x3 | x3 | D2 B- |$ B A A- | A x2 | x3 |$ %80",
" x3 | x3 |$ x3 | x3 | x3 | x3 |$ x3 | [Ac] [Gc]2 | x3 |$ [Gc] [Gc-] [Ac-] | c/B/ G2- |$ %91",
" G/F/4=E/4 D G- | G/^F/ F/G/ [Gc-] | [A-c]3 |$ A/G/4^F/4 G/=F/ E/D/4E/4 | =F2 F | E2 E |$ %97",
" [FB] [FA]2 | [DF] F F | F2 F | G E [EB-] | [F-B] [FA]2 |$ [DF]/ z/ z2 | x3 | x3 | x3 |$ %106",
" G/^F/ [DA] [GB] | =E2 D | [DG]2 [CG-] |$ G ^F =F- | F E E | D _A G |$ F3- | F =E _E- | E D =E |$ %115",
" [Fc]2 _A- | A G =A | [DB]2 [GB] | x3 |$ x C2 | [D^F]2 [DG-] | [DG-] [^CG] ^F |$ G z2 | %123",
" G ^F [=EG] | A- A/^F/4G/4 A |$ G =B/B/4c/4 d | [Gc] =E/E/4F/4 G | [Fc] A/A/4B/4 c |$ %128",
" [FB] ^F/F/4=E/4 D/G/ | A/A/4G/4 ^F/F/4=E/4 D/E/4F/4 | G/G/4=F/4 _E/E/4D/4 C/D/4E/4 |$ %131",
" F/f/4e/4 d/d/4c/4 B/c/4d/4 | [GB] [Ee] [Ec] | [F_A] [DG] [DF] |$ E [Gc] [Ad-] | x3 | x3 |$ x3 | %138",
" [DG] [D^F]2 | x3 | x3 | C3/2 D/ E/C/ |$ [DG] [D^F]2 | x3 |] %144",
"V:14",
" x3 | x3 | x3 | x3 | x3 | x3 |$ x3 | x3 | x3 | x3 | x3 |$ x3 | x3 | x3 | x3 |$ x3 | x3 | x3 | x3 |$ %19",
" x3 | x3 | x3 | G3- |$ x3 | x3 | x3 | x3 | x3 |$ x3 | x3 | x3 | x3 | x3 |$ x3 | x3 | x3 | x3 | %37",
" x3 |$ x3 | x3 | x3 | x3 | x3 |$ x3 | x3 | x3 | x3 | x3 |$ x3 | x3 | x3 | x3 |$ x3 | x3 | G3- | %55",
" x3 | x3 |$ x3 | x3 | x3 | x3 |$ x3 | x3 | x3 | x3 |$ x3 | x3 | x3 | x3 | x3 |$ x3 | x3 | x3 | %73",
" x3 |$ x3 | x3 | x3 |$ x3 | x3 | x3 |$ x3 | x3 |$ x3 | x3 | x3 | x3 |$ x3 | x3 | x3 |$ x3 | x3 |$ %91",
" x3 | x3 | x3 |$ x3 | x3 | x3 |$ x3 | x3 | x3 | x3 | x3 |$ x3 | x3 | x3 | x3 |$ x3 | x3 | x3 |$ %109",
" x3 | x3 | x3 |$ x3 | x3 | x3 |$ x3 | x3 | x3 | x3 |$ x3 | x3 | x3 |$ x3 | x3 | x3 |$ x3 | x3 | %127",
" x3 |$ x3 | x3 | x3 |$ x3 | x3 | x3 |$ x3 | x3 | x3 |$ x3 | x3 | x3 | x3 | x3 |$ x3 | x3 |] %144",
"V:15",
" x3 | x3 | x3 | x3 | x3 | x3 |$ x3 | x3 | x3 | x3 | x3 |$ x3 | x3 | x3 | x3 |$ x3 | x3 | x3 | x3 |$ %19",
" x3 | x3 | x3 | x3 |$ x3 | x3 | x3 | x3 | x3 |$ x3 | x3 | x3 | x3 | x3 |$ x3 | x3 | x3 | x3 | x3 |$ %38",
" x3 | x3 | x3 | x3 | x3 |$ x3 | x3 | x3 | x3 | x3 |$ x3 | x3 | x3 | x3 |$ x3 | x3 | x3 | x3 | x3 |$ %57",
" x3 | x3 | x3 | x3 |$ x3 | x3 | x3 | x3 |$ x3 | x3 | x3 | x3 | x3 |$ x3 | x3 | x3 | x3 |$ x3 | x3 | %76",
" x3 |$ x3 | x3 | x3 |$ x3 | x3 |$ x3 | x3 | x3 | x3 |$ x3 | x3 | x3 |$ x3 | x3 |$ x3 | x3 | x3 |$ %94",
" x3 | x3 | x3 |$ x3 | x3 | x3 | x3 | x3 |$ x3 | x3 | x3 | x3 |$ x3 | x3 | x3 |$ D2 D | x3 | x3 |$ %112",
" x3 | x3 | x3 |$ x3 | x3 | x3 | x3 |$ x3 | x3 | x3 |$ x3 | x3 | ^F2 D- |$ D G2- | x3 | x3 |$ x3 | %129",
" x3 | x3 |$ x3 | x3 | x3 |$ x3 | x3 | x3 |$ x3 | x3 | x3 | x3 | x3 |$ x3 | x3 |] %144",
"V:16",
" G,,4 G,4 G,4 | ^F,4 =F,4 F,4 | =E,4 _E,4 E,4 | D,2E,2D,2C,2B,,2A,,2 | G,,4 G,4 G,4 | %5",
" ^F,4 =F,4 F,4 |$ =E,4 _E,4 E,4 | D,4 D,,4 D,,4 | G,,4 z8 | z12 | z12 |$ z12 | z12 | z12 | z12 |$ %15",
" z12 |!mf! z2 G,,A,, B,,2A,,B,, C,2B,,C, | D,2D,=E, F,2E,F, G,2F,G, | A,4- A,2B,A, G,2A,G, |$ %19",
" ^F,4- F,2D,=E, F,2E,F, | G,4 G,4 G,4 | ^F,4 =F,4 F,4 | =E,4 _E,4 E,4 |$ D,4 D,,4 D,,4 | %24",
" G,,2D,2G,2F,2E,2D,2 | C,2G,2C2B,2_A,2G,2 | F,2E,2D,2C,2B,,2=A,,2 | G,,2_A,,2G,,2F,,2E,,2D,,2 |$ %28",
" C,,4 C,4 C,4 | =B,,4 _B,,4 B,,4 | A,,4 _A,,4 A,,4 | G,,12- | G,,4 G,4 G,4 |$ ^F,4 =F,4 F,4 | %34",
"\"^!!!\" =E,4 _E,4 E,4 | D,2E,2D,2C,2B,,2A,,2 | G,,4 G,4 G,4 | ^F,4 =F,4 F,4 |$ =E,4 _E,4 E,4 | %39",
" D,4 D,,4 D,,4 | G,,4 z8 | z12 | z12 |$ z12 | z12 | z12 | z12 | z12 |$ %48",
" z2!mf! G,,A,, B,,2A,,B,, C,2B,,C, | D,2D,=E, F,2E,F, G,2F,G, | A,4- A,2B,A, G,2A,G, | %51",
" ^F,4- F,2D,=E, F,2E,F, |$ G,4 G,4 G,4 | ^F,4 =F,4 F,4 | =E,4 _E,4 E,4 | D,4 D,,4 D,,4 | %56",
" G,,2D,2G,2F,2E,2D,2 |$ C,2G,2C2B,2_A,2G,2 | F,2E,2D,2C,2B,,2=A,,2 | G,,2_A,,2G,,2F,,2E,,2D,,2 | %60",
"\"^** Vln 4-3 not figured\" C,,4 C,4 C,4 |$ =B,,4 _B,,4 B,,4 | A,,4 _A,,4 A,,4 | G,,12- | %64",
" G,,4 G,4 G,4 |$ ^F,4 =F,4 F,4 | =E,4 _E,4 E,4 | D,12- | D,12- |\"^5-voice figure\" D,12- |$ %70",
" D,8 ^C,4 | D,4 A,4 A,,4 | D,,2D,=E, F,2E,F, G,2F,G, | A,2A,,=B,, =C,2B,,C, D,2C,D, |$ %74",
" =E,4- E,2F,E, D,2E,D, | ^C,4- C,2A,,=B,, C,2B,,C, | D,4 D4 D4 |$ ^C4 =C4 C4 | =B,4 _B,4 B,4 | %79",
" A,4 A,,4 A,,4 |$ D,2=E,2 F,4 F,4 | =E,4 _E,4 E,4 |$ D,4 _D,4 D,4 | C,4 C,,4 C,,4 | F,,4 F,4 F,4 | %85",
" =E,4 _E,4 E,4 |$ D,4 _D,4 D,4 | C,4 C,,4 C,,4 | F,,2!mf!F,G, A,2G,A, =B,2A,B, |$ %89",
" C2C,D, =E,2D,E, ^F,2E,F, | G,2G,,A,, B,,2A,,B,, C,2B,,C, |$ D,2D,,=E,, F,,2E,,F,, G,,2F,,G,, | %92",
" A,,4- A,,2B,,A,, G,,2A,,G,, | ^F,,4- F,,2D,,=E,, F,,2E,,F,, |$ %94",
"\"^9-8 not figured by JSB.\" G,,4 B,4 B,4 | A,4 _A,4 A,4 | G,4 _G,4 G,4 |$ F,4 F,,4 F,,4 | %98",
" B,,4 B,4 B,4 | A,4 _A,4 A,4 | G,4 _G,4 G,4 | F,4 F,,4 F,,4 |$ B,,2 z2 z8 | %103",
" z2!mf! F,G, A,2G,A, =B,2A,B, | C2 z2 z8 | z2 G,A, B,2A,B, C2B,C |$ D2D,=E, ^F,2E,F, G,2F,G, | %107",
" A,2G,^F, =E,2D,E, F,2E,F, | G,4 =F,4 _E,4 |$ D,4 z4\"^unusual fig. pair.\" D,4 | C,4 C4 C4 | %111",
" C4 =B,4 _B,4 |$ B,2\"^!!\"F,G, A,2G,A, =B,2A,B, | C2_B,A, G,2F,G, A,2G,A, | B,6 B,A, G,2A,G, |$ %115",
" F,4- F,E,D,C, B,,2D,B,, | E,4- E,F,E,D, C,2B,,C, | G,,4 G,4 G,4 | G,4 ^F,4 =F,4 |$ F,4 =E,4 _E,4 | %120",
" D,12- | D,12- |$ D,12- | D,12- | D,6 D,,=E,, ^F,,2E,,F,, |$ G,,6 G,A, =B,2A,B, | %126",
" C6 C,D, =E,2D,E, | F,6 F,,G,, A,,2G,,A,, |$ B,,2B,,C,\"^!!\" D,2=E,^F, G,4 | %129",
" z2 A,,B,,\"_!!!\" C,2D,=E, ^F,4 | z2 G,,A,, B,,2C,D, _E,4 |$ z2 F,,G,,\"_!!!\" _A,,2B,,C, D,4 | %132",
" z2 E,,F,, G,,2A,,=B,, C,4 | z2 D,,E,,\"_!!!\" F,,2G,,A,, =B,,4 |$ %134",
" z2 C,,D,, =E,,2D,,E,, ^F,,2E,,F,, | G,,4 G,4 G,4 | ^F,4 =F,4 F,4 |$ =E,4 _E,4 E,4 | %138",
" D,4 D,,4 D,,4 | G,,4!mf! G,4 G,4 | ^F,4 =F,4 F,4 | =E,4 _E,4 E,4 |$ D,2>C,2 D,4 D,,4 | G,,12 |] %144",
""];
abc_enc = [];
