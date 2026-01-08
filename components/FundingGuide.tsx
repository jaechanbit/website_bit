import React from 'react';
import { CreditCard, Wallet, CheckSquare } from 'lucide-react';

const FundingGuide: React.FC = () => {
  return (
    <section id="funding" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            국비지원 안내
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            국민내일배움카드로 교육비 부담 없이 시작하세요.
          </p>
        </div>

        <div className="space-y-12">
          {/* Step 1 */}
          <div className="bg-gradient-to-r from-brand-50 to-white rounded-2xl p-8 md:p-10 border border-brand-100">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="bg-brand-600 p-4 rounded-xl shadow-lg shrink-0">
                <CreditCard className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">STEP 1. 국민내일배움카드 발급</h3>
                <p className="text-gray-600 mb-4">
                  가까운 고용센터를 방문하거나 HRD-Net 홈페이지에서 신청할 수 있습니다.
                  누구나 신청 가능하며(일부 제외), 훈련비의 45~85%를 국비로 지원받을 수 있습니다.
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-500">
                  <li className="flex items-center"><CheckSquare className="w-4 h-4 mr-2 text-brand-500" /> HRD-Net 회원가입 및 로그인</li>
                  <li className="flex items-center"><CheckSquare className="w-4 h-4 mr-2 text-brand-500" /> 발급신청 및 자격 확인</li>
                  <li className="flex items-center"><CheckSquare className="w-4 h-4 mr-2 text-brand-500" /> 카드 수령 (제휴 은행)</li>
                  <li className="flex items-center"><CheckSquare className="w-4 h-4 mr-2 text-brand-500" /> 수강신청</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-gradient-to-r from-green-50 to-white rounded-2xl p-8 md:p-10 border border-green-100">
             <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="bg-green-600 p-4 rounded-xl shadow-lg shrink-0">
                <Wallet className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">STEP 2. 훈련 장려금 안내</h3>
                <p className="text-gray-600 mb-4">
                  140시간 이상 과정 수강 시, 출석률 80% 이상을 달성하면 매월 훈련 장려금이 지급됩니다.
                  (단, 실업급여 수급자 등 제외 대상 있음)
                </p>
                <div className="bg-white p-4 rounded-lg border border-green-200 inline-block">
                  <span className="font-bold text-green-700 text-lg">최대 월 116,000원</span>
                  <span className="text-gray-500 text-sm ml-2"> (2024년 기준, 교통비/식비 포함)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FundingGuide;