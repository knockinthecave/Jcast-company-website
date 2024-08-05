import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import './css/CompanyHistory.css';

const CompanyHistory = () => {
  const timelineData = [
    {
      year: "2023",
      events: [
        { month: "04", description: "중기부 제조혁신추진단 제조데이터 상품가공 지원 가공기업 Pool 등록" },
        { month: "04", description: "LS일렉트릭(구LS산전) 협력공급기업 등록" },
      ],
    },
    {
      year: "2022",
      events: [
        { month: "11", description: "2022대중소상생형(삼성/중소기업중앙회)스마트공장 구축(유형2)" },
        { month: "08", description: "데이터인프라구축 AI솔루션 실증지원사업 2건완료" },
        { month: "06", description: "데이터바우처 지원사업(AI 가공서비스) 선정" },
        { month: "05", description: "대중소 상생형(포스코) 스마트공장 구축 완료" },
        { month: "05", description: "스마트공방 기술보급 사업 선정" },
        { month: "04", description: "스마트서비스 공급기업 등록" },
        { month: "02", description: "데이터인프라구축 AI 솔루션 실증지원사업 2건 사업 종료(성공)" },
      ],
    },
    {
      year: "2021",
      events: [
        { month: "11", description: "디지털융합 프로젝트 선정 및 사업종료 (성공, AI기반 알약분류 시스템 고도화)" },
        { month: "10", description: "AI바우처 지원사업 구축 종료 (AI기반의 축산육제품 품질향상을 위한 숙성육 제조 관리시스템 개발)" },
        { month: "10", description: "스마트공장 지원사업 (고도화1) 선정" },
        { month: "06", description: "대중소 상생형(포스코) 스마트공장 구축" },
        { month: "04", description: "2021년 AI 바우처 지원사업 선정" },
        { month: "01", description: "데이터인프라구축 AI 솔루션 실증지원사업 2건 사업 종료(성공)" },
      ],
    },
    {
      year: "2020",
      events: [
        { month: "12", description: "스마트공장 지원사업 (신규구축) 2건 사업 종료(성공)" },
        { month: "08", description: "AI 기반 제조데이터 분석 솔루션 공급기업 등록" },
        { month: "04", description: "IIPT ICT 신시장창출 개발 과제 1단계 선정 (고부가가치 축산육제품생산, 판매를 위한 빅 데이터 적용 큐어링 시스템 및 AI기반의 판매/관리 서비스 프랫폼 개발" },
        { month: "02", description: "경기도 R&D개발 과제 선정 (스마트 공장의 작업 안전을 위한 전방위 Lider기반 안전 시스템(MLSS)개발)" },
        { month: "01", description: "다수의 스마트공장 도입업체와 MES기반 스마트공장 구축 계약" },
      ],
    },
    {
     year: "2019",
     events: [
       { month: "05", description: "스마트 공장 공급업체 등록" },
       { month: "04", description: "LGE수주 VW사ARHUD 2차개발완료 (스마트공장 생산자동화 포함)" },
       { month: "01", description: "스마트 공장 지원사업 ERP, MES 출시" },
     ],
   },
   {
     year: "2018",
     events: [
       { month: "07", description: "LGE수주 VW사 ARHUD 2차개발계약 (스마트공장 생산자동화 포함)" },
       { month: "01", description: "IBB 2차(Q사)납품완료" },
     ],
   },
   {
     year: "2017",
     events: [
       { month: "11", description: "LGE수주 VW사ARHUD 개발계약 및 개발업체등록 (스마트공장 생산자동화포함)" },
       { month: "04", description: "IBB BMWJAPEN(Digital Works, Inc.)에 2차 계약" },
     ],
   },
   {
     year: "2016",
     events: [
       { month: "12", description: "IBB BMWJAPEN(Digital Works, Inc.)에 1차 제품 판매계약" },
       { month: "11", description: "IBB(Interface board for BMW,Q사) 1차 제품 판매계약" },
     ],
   },
   {
     year: "2014",
     events: [
       { month: "10", description: "LGE DDB(BMW HU,CID 제품 판매 계약)" },
     ],
   },
   {
     year: "2013",
     events: [
       { month: "02", description: "이노비즈 (INNO-BIZ, 중소기업청)" },
     ],
   },
   {
     year: "2012",
     events: [
       { month: "11", description: "이노바사 (독일SERDES chip 제조사) AHD60 HD급카메라영상시스템" },
     ],
   },
   {
     year: "2011",
     events: [
       { month: "02", description: "지경부 산업원천과제(GreenIT를 위한 구간 통행정보 관리시스템 개발)" },
     ],
   },
   {
     year: "2010",
     events: [
       { month: "08", description: "지경부신기술(NET)인증" },
       { month: "08", description: "LG Display에 HDcast납품 (반도체 공장 자동화)" },
     ],
   },
   {
     year: "2009",
     events: [
       { month: "06", description: "지경부 산업원천과제 [복합이기종센서기반 차량인식기술개발] 선정" },
       { month: "05", description: "중소기업과제(SD/HD 카메라 일체형 촬영 실시간 전송 모듈개발)" },
       { month: "02", description: "마사회 무선랜 시스템 장비 구매 설치" },
     ],
   },
   {
     year: "2008",
     events: [
       { month: "09", description: "세네갈정부 전자정부망 구축사업체결(대한전선, 미산)" },
       { month: "09", description: "(주)대한전선,미산 세네갈 전자정부망 구축사업 계약 체결" },
       { month: "08", description: "정보통신공사업등록" },
       { month: "03", description: "소프트웨어 사업자 신고" },
     ],
   },
   {
     year: "2007",
     events: [
       { month: "08", description: "[KIPA] 안양-고양시 WiMAX 기반 항공영상중계시스템 개발 선정" },
       { month: "06", description: "산학연 공동기술개발 컨소시엄 표창장 수상[두원공과대학교]" },
       { month: "05", description: "정보통신부 '산업경쟁력 강화사업' 선정 및 계약 체결" },
       { month: "04", description: "공장인허가[제 41170-03886호]" },
       { month: "03", description: "삼성전기와 용역개발에 대한 계약체결" },
       { month: "02", description: "POSCO건설과 WIMAX 장비 계약 체결 'JC5800'" },
     ],
   },
   {
     year: "2006",
     events: [
       { month: "02", description: "벤처기업확인 (제 616241-00269 호)" },
       { month: "02", description: "기업부설연구소 (제 20061200 호)" },
     ],
   },
   {
     year: "2005",
     events: [
       { month: "10", description: "(주)제이캐스트 설립(대표이사 어재홍)" },
     ],
   },
    // Add more years and events as needed
  ];

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <section id="timeline">
        <h2 className="main-title">기업연혁</h2>
          {timelineData.map((yearData, yearIndex) => (
            <div key={yearIndex} className="timeline-year">
              <div className="timeline-year-header">
                <h2>{yearData.year}</h2>
              </div>
              <div className="timeline-events">
                {yearData.events.map((event, eventIndex) => (
                  <div key={eventIndex} className="timeline-event">
                    <div className="timeline-event-content">
                      <span className="timeline-event-month">{event.month}</span>
                      <span className="timeline-event-description">{event.description}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>
      </Container>
    </React.Fragment>
  );
};

export default CompanyHistory;
