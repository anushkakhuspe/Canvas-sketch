//canvas initialisation
var canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("mycanvas");
var context: CanvasRenderingContext2D = canvas.getContext('2d');

context.save();                                     //hair
context.beginPath();
context.lineWidth = 1;                              //line width
context.arc(400, 185, 60, 0, Math.PI * 2, false);
context.fillStyle = '#5A3825';                      //fill colour setting
context.fill();                                     //fill
context.strokeStyle = '#5A3825';
context.stroke();
context.restore();

context.save();                                     //left sleeve
context.beginPath();
context.fillStyle = "#fff";
context.strokeStyle = "#000";
context.lineWidth = 1;
context.bezierCurveTo(378, 255, 360, 280, 356, 332);
context.lineWidth = 20
context.fill();
context.strokeStyle = '#3E3E3E';
context.stroke();
context.closePath();
context.restore()
context.beginPath();                                //outline
context.moveTo(368, 255);
context.quadraticCurveTo(353, 280, 346, 331)
context.lineTo(390, 331)
context.stroke()

context.save();                                    //wand
context.beginPath();
context.moveTo(480, 274);
context.lineTo(500, 210);
context.moveTo(502, 210)
context.lineTo(483, 273)
context.lineWidth = 2;
context.strokeStyle = '#3D2314';
context.fill();
context.stroke();
context.restore()

context.save();                                     //left leg
context.beginPath();
context.moveTo(393, 275);
context.lineTo(382, 375);
context.lineWidth = 30;
context.strokeStyle = '#525154';
context.stroke();
context.restore()
context.save();                                    //right leg
context.beginPath();
context.moveTo(416, 280);
context.lineTo(428, 374);
context.lineWidth = 29
context.strokeStyle = '#525154'
context.stroke();
context.restore()

context.save();                                       //bottom curve
context.beginPath();
context.moveTo(395, 323)
context.quadraticCurveTo(404, 320, 414, 323)
context.strokeStyle = '#525154'
context.lineWidth = 12;
context.stroke();
context.restore()
context.save();                                        //shirt
context.beginPath();
context.translate(400, 200);
context.arc(0, 35, 55, 60 * Math.PI / 180, 115 * Math.PI / 180, false)
context.lineWidth = 50;
context.strokeStyle = '#999A98';
context.stroke();
context.restore();

context.save();                                         //left hand
context.beginPath();
context.arc(370, 332, 12, Math.PI, Math.PI / 2, true)
context.fillStyle = '#EDC792';                          //fill colour setting
context.fill();                                         //fill 
context.lineWidth = 12
context.strokeStyle = '#EDC792'
context.stroke();
context.restore()
context.beginPath();                                    //outline
context.arc(363, 332, 12, Math.PI, Math.PI / 2, true)
context.stroke();

context.save();                                         //left robe
context.beginPath();
context.moveTo(386, 263);
context.lineTo(373, 362);
context.lineWidth = 27;
context.strokeStyle = '#3F3F3F';
context.stroke();
context.restore()
context.beginPath();
context.moveTo(398, 265);
context.lineTo(386, 362);
context.moveTo(397, 265);
context.lineTo(402, 273);
context.stroke();

context.save();                                         //right sleeve
context.beginPath()
context.moveTo(474, 277);
context.quadraticCurveTo(484, 279, 472, 274)
context.strokeStyle = '#ECC997'
context.lineWidth = 16
context.stroke()
context.restore()
context.save();
context.beginPath()
context.moveTo(484, 273);
context.lineTo(478, 273)
context.stroke()
context.restore()
context.save();
context.beginPath();
context.moveTo(427, 262);
context.lineTo(450, 275)
context.lineTo(475, 277)
context.lineWidth = 21;
context.strokeStyle = '#3F3F3F';
context.stroke();
context.restore();

context.beginPath();
context.moveTo(474, 268);
context.quadraticCurveTo(498, 280, 474, 285);
context.stroke();

context.save();                                         //right robe
context.beginPath();
context.moveTo(418, 260);
context.lineTo(437, 360);
context.lineWidth = 27
context.strokeStyle = '#3F3F3F'
context.stroke();
context.restore()
context.beginPath();
context.moveTo(405, 264);
context.lineTo(423, 362);
context.moveTo(406, 264);
context.lineTo(402, 273)
context.stroke()

context.save();                                         //scarf
context.beginPath();
context.fillStyle = "#fff";
context.strokeStyle = "#000";
context.lineWidth = 20;
context.bezierCurveTo(384, 259, 373, 280, 380, 320);
context.strokeStyle = '#D9383A'
context.fill();
context.stroke();
context.closePath();
context.restore()
context.save();
context.beginPath();
context.translate(400, 200);
context.arc(0, 3, 55, 51 * Math.PI / 180, 128 * Math.PI / 180, false)
context.lineWidth = 15;
context.strokeStyle = '#D93739';
context.fill()
context.stroke();
context.restore();

context.beginPath();                                //face
context.arc(400, 200, 50, 0, Math.PI * 2, false);
context.lineWidth = 1;
context.fillStyle = '#EDC792';                      //fill colour setting
context.fill();                                     //fill
context.stroke();

context.save();                                     //scar
context.beginPath();
context.translate(297, 52)
context.moveTo(100, 100);
context.lineTo(102, 110);
context.lineTo(95, 106);
context.lineTo(96, 116);
context.strokeStyle = '#6F453D'
context.stroke();
context.restore()

context.save();                                            //top hair
context.beginPath();
context.moveTo(390, 127);
context.lineTo(382, 122);
context.quadraticCurveTo(395, 123, 395, 127)
context.moveTo(395, 127);
context.lineTo(397, 120);
context.lineTo(404, 128);
context.quadraticCurveTo(421, 119, 425, 123)
context.moveTo(416, 128)
context.lineTo(425, 123)
context.lineWidth = 5;
context.strokeStyle = '#5A3825';
context.stroke();
context.restore();

context.save();                                             //hair
context.beginPath();
context.arc(370, 160, 12, Math.PI, Math.PI / 2, true)
context.fillStyle = '#5A3825';                              //fill colour setting
context.fill();                                             //fill 
context.lineWidth = 7;
context.strokeStyle = '#5A3825';
context.stroke();
context.restore();
context.save();
context.lineWidth = 8;
context.beginPath();
context.rotate(Math.PI / 6)
context.arc(412, -47, 12, Math.PI / 2, Math.PI, false)
context.fillStyle = '#5A3825';                              //fill colour setting
context.fill();                                             //fill
context.lineCap = "round";
context.strokeStyle = '#5A3825';
context.stroke();
context.restore();
context.save();
context.lineWidth = 7;
context.beginPath();
context.arc(390, 150, 20, Math.PI, Math.PI / 2, true)
context.fillStyle = '#5A3825';                              //fill colour setting
context.fill();                                             //fill
context.strokeStyle = '#5A3825';
context.stroke();
context.restore();
context.save();
context.lineWidth = 9;
context.beginPath();
context.rotate(Math.PI / 6)
context.arc(415, -70, 16, Math.PI / 2, Math.PI, false)
context.fillStyle = '#5A3825';                              //fill colour setting
context.fill();                                             //fill
context.strokeStyle = '#5A3825';
context.stroke();
context.restore();

context.save();
context.lineWidth = 14;
context.beginPath();
context.arc(410, 150, 20, 0, Math.PI / 2, false)
context.strokeStyle = '#5A3825';
context.stroke();
context.restore();

context.save();
context.lineWidth = 4;
context.beginPath();
context.arc(400, 150, 20, 0, 0.8 * Math.PI / 2, false)
context.strokeStyle = '#5A3825';
context.stroke();
context.restore();

context.save();                                            //specs joint
context.beginPath();
context.translate(400, 200);
context.arc(0, 0, 8, 0, Math.PI, true);
context.lineWidth = 2;
context.stroke();
context.beginPath();                                        //smile
context.arc(0, 20, 10, 0, Math.PI, false);
context.stroke();
context.restore();

context.save();                                             //Brows
context.beginPath();
context.translate(375, 180);
context.arc(0, 0, 10, -15 * Math.PI / 180, -165 * Math.PI / 180, true);
context.lineWidth = 2;
context.strokeStyle = '#23120B';
context.stroke();
context.restore();

context.save();
context.beginPath();
context.translate(425, 180);
context.arc(0, 0, 10, -15 * Math.PI / 180, -165 * Math.PI / 180, true);
context.lineWidth = 2;
context.strokeStyle = '#23120B';
context.stroke();
context.restore();

context.save();                                             //specs
context.beginPath();
context.arc(375, 198, 17, 0, Math.PI * 2, true)
context.lineWidth = 3;
context.stroke();
context.restore()

context.beginPath();                                        //left eye
context.ellipse(376, 198, 6, 8, Math.PI, 0, 2 * Math.PI)
context.fillStyle = 'black';
context.fill()
context.stroke();

context.beginPath();
context.arc(375, 197, 2, 0, Math.PI * 2, true)
context.fillStyle = 'white';
context.fill()
context.stroke();
context.beginPath();                                        //left spec handle
context.moveTo(358, 197)
context.lineTo(350, 195)
context.save()
context.moveTo(350, 195)
context.quadraticCurveTo(334, 203, 350, 213);               //left ear
context.fillStyle = '#FFDBAC';
context.lineWidth = 2
context.fill()
context.stroke()
context.restore()

context.save();                                             //right specs
context.beginPath();
context.arc(425, 198, 17, 0, Math.PI * 2, true)
context.lineWidth = 3;
context.stroke();
context.restore()
context.beginPath();                                        //right eye
context.ellipse(424, 198, 6, 8, Math.PI, 0, 2 * Math.PI)
context.fillStyle = 'black';
context.fill()
context.stroke();
context.beginPath();
context.arc(425, 197, 2, 0, Math.PI * 2, true)
context.fillStyle = 'white';
context.fill()
context.stroke();
context.save();                                             //right spec handle
context.beginPath();
context.moveTo(441, 197)
context.lineTo(450, 195)
context.moveTo(450, 195);
context.quadraticCurveTo(466, 203, 450, 213)
context.lineWidth = 2;
context.fillStyle = '#FFDBAC';
context.fill();
context.stroke()
context.restore();

context.save();                                             //line1
context.translate(400, 200);
context.beginPath();
context.moveTo(-29, 40);
context.lineTo(-38, 52);
context.stroke();
context.restore()

context.save();                                            //line2
context.translate(400, 200);
context.beginPath();
context.moveTo(29, 40);
context.lineTo(40, 51);
context.quadraticCurveTo(-1, 80, -38, 52)
context.stroke();
context.restore();

context.save();                                            //1
context.beginPath();
context.translate(400, 200);
context.moveTo(-17, 47);
context.lineTo(-24, 60);
context.strokeStyle = '#F39427'
context.lineWidth = 5
context.stroke();

context.beginPath();                                        //2
context.moveTo(-6, 50);
context.lineTo(-10, 64);
context.stroke();

context.beginPath();                                        //3
context.moveTo(6, 50);
context.lineTo(9, 64);
context.stroke();

context.beginPath();                                        //4
context.moveTo(19, 47);
context.lineTo(26, 59);
context.stroke();
context.restore();

context.beginPath();                                       //bottom line robe
context.moveTo(386, 363)
context.lineTo(360, 360);
context.lineTo(368, 310)

context.moveTo(401, 329)                                   //left leg
context.lineTo(398, 375)
context.moveTo(369, 360)
context.lineTo(367, 374)
context.moveTo(408, 329);                                  //right leg
context.lineTo(413, 375);
context.moveTo(440, 360)
context.lineTo(443, 374)
context.stroke();
context.beginPath();                                        //shoes
context.ellipse(382, 377, 16, 6, Math.PI, 0, 2 * Math.PI)
context.fillStyle = '#3F3F3F';
context.fill();
context.stroke();
context.beginPath();
context.ellipse(429, 377, 16, 6, Math.PI, 0, 2 * Math.PI)
context.fillStyle = '#3F3F3F';
context.fill();
context.stroke();

context.beginPath();                                        //bottom line robe
context.moveTo(423, 362)
context.lineTo(450, 358);
context.lineTo(435, 276)
context.lineTo(449, 285)
context.lineTo(475, 287)
context.lineTo(476, 266)
context.stroke();
context.restore();
context.beginPath();                                        //middle portion
context.moveTo(393, 313)
context.quadraticCurveTo(403, 317, 414, 313)
context.strokeStyle = '#D93938'
context.lineWidth = 2
context.stroke();
context.closePath();

context.save();                                             //line1
context.beginPath();
context.translate(400, 200);
context.moveTo(-11, 75);
context.lineTo(-30, 72);
context.strokeStyle = '#F39427'
context.lineWidth = 5                                       //line2
context.moveTo(-12, 86);
context.lineTo(-32, 85);
context.lineWidth = 5                                       //line3
context.moveTo(-13, 97);
context.lineTo(-32, 97);
context.lineWidth = 5                                       //line4
context.moveTo(-12, 108);
context.lineTo(-31, 109);
context.lineWidth = 5
context.stroke();
context.restore();