import React from 'react';
import Layout from '../components/Layout';
import ConsultationForm from '../components/ConsultationForm';
import { Phone, MapPin, Clock } from 'lucide-react';
import { ADDRESS, CONTACT_PHONE } from '../constants';

const Consultation: React.FC = () => {
  return (
    <Layout title="상담신청" subtitle="궁금하신 점을 남겨주시면 친절하게 상담해 드립니다.">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            
            {/* Contact Info Side */}
            <div className="lg:col-span-2 space-y-8">
                <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">방문 상담 안내</h3>
                    <p className="text-slate-600 mb-6">
                        학원에 직접 방문하시면 강의실 시설을 둘러보시고 더 자세한 상담을 받으실 수 있습니다.
                    </p>
                    <div className="space-y-4">
                        <div className="flex items-start">
                            <MapPin className="h-6 w-6 text-brand-navy mt-1 mr-3 flex-shrink-0" />
                            <div>
                                <h4 className="font-bold text-slate-900">주소</h4>
                                <p className="text-slate-600">{ADDRESS}</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <Phone className="h-6 w-6 text-brand-navy mt-1 mr-3 flex-shrink-0" />
                            <div>
                                <h4 className="font-bold text-slate-900">전화번호</h4>
                                <p className="text-slate-600">{CONTACT_PHONE}</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <Clock className="h-6 w-6 text-brand-navy mt-1 mr-3 flex-shrink-0" />
                            <div>
                                <h4 className="font-bold text-slate-900">상담 가능 시간</h4>
                                <p className="text-slate-600 text-sm">
                                    평일: 09:00 ~ 21:00<br/>
                                    토요일: 09:00 ~ 17:00<br/>
                                    (일요일, 공휴일 휴무)
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="h-64 bg-slate-200 rounded-lg overflow-hidden relative">
                    {/* Placeholder for Map */}
                    <div className="absolute inset-0 flex items-center justify-center text-slate-500">
                        <span className="font-medium">지도 영역 (API 연동 필요)</span>
                    </div>
                    <img src="https://picsum.photos/600/400?grayscale&blur=2" alt="Map Placeholder" className="w-full h-full object-cover opacity-30" />
                </div>
            </div>

            {/* Form Side */}
            <div className="lg:col-span-3">
                <ConsultationForm />
            </div>
        </div>
      </div>
    </Layout>
  );
};

export default Consultation;