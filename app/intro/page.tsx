import { Award, Users, Target } from 'lucide-react';

export default function IntroPage() {
  return (
    <div className="flex flex-col">
      <div className="bg-brand-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">학원 소개</h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">신뢰할 수 있는 IT 교육의 파트너, 바른컴퓨터학원입니다.</p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <img 
              src="https://picsum.photos/800/600?random=10" 
              alt="학원 전경" 
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-brand-navy mb-6">"기본에 충실한 교육, 결과로 증명하는 학원"</h2>
            <p className="text-slate-700 leading-8 mb-6">
              안녕하세요. 바른컴퓨터학원입니다.<br/>
              급변하는 디지털 시대에 컴퓨터 활용 능력은 선택이 아닌 필수가 되었습니다.
            </p>
            <p className="text-slate-700 leading-8 mb-6">
              저희 학원은 고용노동부 인증 직업훈련기관으로서 구직자와 재직자를 위한 국비지원 과정부터,
              미래 인재를 양성하는 초·중·고 학생 교육 과정까지 폭넓은 커리큘럼을 운영하고 있습니다.
            </p>
            <p className="text-slate-700 leading-8">
              단순한 기술 암기가 아닌, 실무에서 바로 통하는 문제 해결 능력을 키워드리는 것이 저희의 목표입니다.
              정직하고 성실한 교육으로 여러분의 성장을 돕겠습니다.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-8 md:p-12">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-slate-900">핵심 가치</h2>
            <div className="w-16 h-1 bg-brand-blue mx-auto mt-4"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 text-brand-navy mb-4">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">실무 중심</h3>
              <p className="text-slate-600">현장 수요를 반영한 커리큘럼으로<br/>실제 활용 가능한 기술 교육</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 text-brand-navy mb-4">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">학생 중심</h3>
              <p className="text-slate-600">개인별 수준에 맞춘<br/>눈높이 교육과 꼼꼼한 피드백</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 text-brand-navy mb-4">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">결과 지향</h3>
              <p className="text-slate-600">자격증 취득과 취업 연계까지<br/>확실한 성과 달성</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}