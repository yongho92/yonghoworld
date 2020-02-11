<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<script src="http://code.jquery.com/jquery-latest.min.js"></script>
<script src="http://asp1.krx.co.kr/inc/js/asp_chart.js"></script>
<script src="../common/js/asp_chart.js"></script>
<link rel="stylesheet" type="text/css" href="../common/css/stockinfo.css"/>
<title>실시간시세</title>
</head>
<body>
	<div class="header-wrap" >
	<span >실시간 시세 &nbsp;<span class="time_img"></span>2019/07/19 16:06:24 기준(장마감)</span>
	</div>
	<div style="float:right;border: 1px solid #dcdcdc;padding:5px 10px;color:#666;margin-bottom:10px;"><a href="stockInfo.jsp" target="_self">새로고침</a></div>
	<div class="body-wrap">
		<div></div>
		<div id="gpDisp"></div>
		<div class="data-lists">
			<dl>
				<dt><!-- <span></span> -->주가정보</dt>
				<dd>
					<div class="main_stock_box1">
						<ul>
							<li>
								<div class="main_stock_box1_title">
									
									<ul>			
										<li class="main_stock_box1_title1">A002230<span>피에스텍</span></li>
										<li class="main_stock_box1_title2"><span class="CurJuka">현재가</span>4,100</li>
									</ul>
									<ul>
										<li class="main_stock_box1_contn"><span class="title">전일대비</span>
										<span>
										
										<span class="up">
										▲
										</span>
										
										
										
										60(1.49%)
										</span>
										</li>
										<li class="main_stock_box1_contn"><span class="title">거래량</span>
										<span>19,202</span>
										</li>
										<li class="main_stock_box1_contn"><span class="title">거래대금</span>
										<span>77,543,785</span>
										</li>
									</ul>
									
								</div>
							</li>
						</ul>
					</div>
					<div class="main_stock_box2">
					<table id="stockInfo">
						<tr>
							<th>시가</th>
							<td>4,000</td>
							<th colspan="2">상한가</th>
							<td>5,250</td>
						</tr>
						<tr>
							<th>고가</th>
							<td>4,100</td>
							<th colspan="2">하한가</th>
							<td>2,830</td>
						</tr>
						<tr>
							<th>저가</th>						
							<td>4,000</td>
							<th colspan="2">액면가</th>
							<td>500</td>
						</tr>
						<tr>
							
							<th>PER</th>
							<td>-256.25</td>
							<th rowspan="2" style="border-bottom:1px solid #dbdbdb;">52주<br>(종가기준)</th>
							<th>최고</th>
							<td>5,870</td>
						</tr>
						<tr>
							<th>상장주식수</th>
							<td>19,669,243</td>
							<th>최저</th>
							<td>3,985</td>
							
						</tr>
					</table>
					</div>
				</dd>
			</dl>
			<ul class="tabs">
		    	<li><a href="#tab1">호가</a></li>
		   		<li><a href="#tab2">시간대별체결가</a></li>
		   		<li><a href="#tab3">회원사별거래</a></li>
		   		<li><a href="#tab4">일자별시세</a></li>
			</ul>
			<div class="tab_container">
				<div id="tab1" class="tab_content">
					<table id="Hoga">
						<tr>
							<th>매도잔량</th>
							<th>호가</th>
							<th>매수잔량</th>
						</tr>
						
							<tr>
								<td>0</td>
								<td>0</td>
								<td></td>
							</tr>
							<tr>
								<td>0</td>
								<td>0</td>
								<td></td>
							</tr>
							<tr>
								<td>11</td>
								<td>4,110</td>
								<td></td>
							</tr>
							<tr>
								<td>10</td>
								<td>4,105</td>
								<td></td>
							</tr>
							<tr>
								<td>143</td>
								<td>4,100</td>
								<td></td>
							</tr>
							<tr>
								<td></td>
								<td>4,065</td>
								<td>10</td>
							</tr>
							<tr>
								<td></td>
								<td>4,060</td>
								<td>120</td>
							</tr>
							<tr>
								<td></td>
								<td>4,055</td>
								<td>1,191</td>
							</tr>
							<tr>
								<td></td>
								<td>0</td>
								<td>0</td>
							</tr>
							<tr>
								<td></td>
								<td>0</td>
								<td>0</td>
							</tr>
							<tr>
								<td>164</td>
								<td>잔량합계</td>
								<td>1,321</td>
							</tr>
						
					</table>
				</div>
	    		<div id="tab2" class="tab_content">
	    			<table id="tradedPrice_time">
						<tr>
							<th>시간</th>
							<th>체결가</th>
							<th>전일대비</th>
							<th>매도호가</th>
							<th>매수호가</th>
							<th>매수잔량</th>
						</tr>
						
							
							<tr>
								<td>15:30:30</td>
								<td>4,100</td>
								<td>
								
								<span class="up">
								▲
								
								</span>
								
								</span>
								
								</span>	
								60</td>
								<td>4,100</td>
								<td>4,065</td>
								<td>200</td>
							</tr>
							
							<tr>
								<td>15:19:30</td>
								<td>4,100</td>
								<td>
								
								<span class="up">
								▲
								
								</span>
								
								</span>
								
								</span>	
								60</td>
								<td>4,100</td>
								<td>4,055</td>
								<td>700</td>
							</tr>
							
							<tr>
								<td>15:08:00</td>
								<td>4,100</td>
								<td>
								
								<span class="up">
								▲
								
								</span>
								
								</span>
								
								</span>	
								60</td>
								<td>4,100</td>
								<td>4,050</td>
								<td>1,000</td>
							</tr>
							
							<tr>
								<td>15:06:30</td>
								<td>4,075</td>
								<td>
								
								<span class="up">
								▲
								
								</span>
								
								</span>
								
								</span>	
								35</td>
								<td>4,080</td>
								<td>4,040</td>
								<td>499</td>
							</tr>
							
							<tr>
								<td>15:04:40</td>
								<td>4,070</td>
								<td>
								
								<span class="up">
								▲
								
								</span>
								
								</span>
								
								</span>	
								30</td>
								<td>4,070</td>
								<td>4,040</td>
								<td>1</td>
							</tr>
							
							<tr>
								<td>15:01:10</td>
								<td>4,050</td>
								<td>
								
								<span class="up">
								▲
								
								</span>
								
								</span>
								
								</span>	
								10</td>
								<td>4,070</td>
								<td>4,040</td>
								<td>8</td>
							</tr>
							
							<tr>
								<td>15:00:50</td>
								<td>4,050</td>
								<td>
								
								<span class="up">
								▲
								
								</span>
								
								</span>
								
								</span>	
								10</td>
								<td>4,050</td>
								<td>4,035</td>
								<td>10</td>
							</tr>
							
							<tr>
								<td>15:00:20</td>
								<td>4,050</td>
								<td>
								
								<span class="up">
								▲
								
								</span>
								
								</span>
								
								</span>	
								10</td>
								<td>4,070</td>
								<td>4,050</td>
								<td>18</td>
							</tr>
							
							<tr>
								<td>15:00:00</td>
								<td>4,050</td>
								<td>
								
								<span class="up">
								▲
								
								</span>
								
								</span>
								
								</span>	
								10</td>
								<td>4,070</td>
								<td>4,050</td>
								<td>18</td>
							</tr>
							
							<tr>
								<td>14:59:40</td>
								<td>4,050</td>
								<td>
								
								<span class="up">
								▲
								
								</span>
								
								</span>
								
								</span>	
								10</td>
								<td>4,070</td>
								<td>4,050</td>
								<td>7</td>
							</tr>
							
						
					</table>
				</div>
				<div id="tab3" class="tab_content">
					<table id="member_trade">
					<tr>
						<th colspan="2">매도상위</th>
						<th colspan="2">매수상위</th>
					</tr>
					<tr>
						<th>증권사</th>
						<th>거래량</th>
						<th>증권사</th>
						<th>거래량</th>
					</tr>
					
						
						<tr>
							<td>하이증권</td>
							<td>10,038</td>
							<td>대신증권</td>
							<td>9,400</td>
						</tr>
						
						<tr>
							<td>키움증권</td>
							<td>4,438</td>
							<td>미래에셋대우</td>
							<td>5,276</td>
						</tr>
						
						<tr>
							<td>대신증권</td>
							<td>2,255</td>
							<td>키움증권</td>
							<td>1,419</td>
						</tr>
						
						<tr>
							<td>미래에셋대우</td>
							<td>527</td>
							<td>신한투자</td>
							<td>1,398</td>
						</tr>
						
						<tr>
							<td>신한투자</td>
							<td>500</td>
							<td>삼성증권</td>
							<td>567</td>
						</tr>
						
					
				</table>
				</div>
				<div id="tab4" class="tab_content">
					<table id="tradedPrice_day">
						<tr>
							<th>일자</th>
							<th>종가</th>
							<th>전일대비</th>
							<th>시가</th>
							<th>고가</th>
							<th>저가</th>
							<th>거래량</th>
							<th>거래대금</th>
						</tr>
						
							
							<tr>
								<td>19/07/19</td>
								<td>4,100</td>
								<td>
								
								<span class="up">
								▲
								
								</span>
								
								</span>
								
								</span>	
								60</td>
								<td>4,000</td>
								<td>4,100</td>
								<td>4,000</td>
								<td>19,202</td>
								<td>77,543,785</td>
							</tr>
							
							<tr>
								<td>19/07/18</td>
								<td>4,040</td>
								<td>
								
								<span class="up">
								▲
								
								</span>
								
								</span>
								
								</span>	
								10</td>
								<td>4,115</td>
								<td>4,115</td>
								<td>3,970</td>
								<td>14,161</td>
								<td>56,634,835</td>
							</tr>
							
							<tr>
								<td>19/07/17</td>
								<td>4,030</td>
								<td>
								
								</span>
								
								</span>
								
								<span class="down">
								▼
								
								</span>	
								15</td>
								<td>4,000</td>
								<td>4,105</td>
								<td>3,970</td>
								<td>32,515</td>
								<td>129,852,730</td>
							</tr>
							
							<tr>
								<td>19/07/16</td>
								<td>4,045</td>
								<td>
								
								<span class="up">
								▲
								
								</span>
								
								</span>
								
								</span>	
								60</td>
								<td>3,955</td>
								<td>4,100</td>
								<td>3,955</td>
								<td>43,035</td>
								<td>172,241,345</td>
							</tr>
							
							<tr>
								<td>19/07/15</td>
								<td>3,985</td>
								<td>
								
								</span>
								
								</span>
								
								<span class="down">
								▼
								
								</span>	
								140</td>
								<td>4,120</td>
								<td>4,125</td>
								<td>3,970</td>
								<td>90,691</td>
								<td>362,554,740</td>
							</tr>
							
							<tr>
								<td>19/07/12</td>
								<td>4,125</td>
								<td>
								
								</span>
								
								</span>
								
								<span class="down">
								▼
								
								</span>	
								10</td>
								<td>4,160</td>
								<td>4,160</td>
								<td>4,000</td>
								<td>12,585</td>
								<td>51,534,840</td>
							</tr>
							
							<tr>
								<td>19/07/11</td>
								<td>4,135</td>
								<td>
								
								<span class="up">
								▲
								
								</span>
								
								</span>
								
								</span>	
								30</td>
								<td>4,090</td>
								<td>4,155</td>
								<td>4,090</td>
								<td>11,243</td>
								<td>46,299,635</td>
							</tr>
							
							<tr>
								<td>19/07/10</td>
								<td>4,105</td>
								<td>
								
								</span>
								
								</span>
								
								<span class="down">
								▼
								
								</span>	
								55</td>
								<td>4,150</td>
								<td>4,185</td>
								<td>4,030</td>
								<td>37,655</td>
								<td>155,070,165</td>
							</tr>
							
							<tr>
								<td>19/07/09</td>
								<td>4,160</td>
								<td>
								
								</span>
								
								</span>
								
								<span class="down">
								▼
								
								</span>	
								80</td>
								<td>4,210</td>
								<td>4,320</td>
								<td>4,135</td>
								<td>17,050</td>
								<td>71,446,910</td>
							</tr>
							
							<tr>
								<td>19/07/08</td>
								<td>4,240</td>
								<td>
								
								</span>
								
								</span>
								
								<span class="down">
								▼
								
								</span>	
								150</td>
								<td>4,390</td>
								<td>4,390</td>
								<td>4,210</td>
								<td>20,494</td>
								<td>87,220,645</td>
							</tr>
							
						
					</table>
				</div>
			</div>				
		</div>
	</div>
	<div class="footer-wrap"></div>
</body>
</html>