import { HelpCircle, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-32 text-center space-y-6">
      <div className="mx-auto h-12 w-12 rounded-full bg-red-50 flex items-center justify-center text-red-500">
        <HelpCircle className="h-6 w-6" />
      </div>
      <div className="space-y-2">
        <h2 className="font-display text-2xl font-bold text-slate-800">
          페이지를 찾을 수 없습니다 (PAGE_NOT_FOUND)
        </h2>
        <p className="font-sans text-xs sm:text-sm text-slate-500 leading-relaxed max-w-sm mx-auto">
          요청하신 경로가 올바르지 않거나 아직 준비되지 않은 프로젝트 상세 리포트입니다. 하단의 링크를 클릭하거나 로고 버튼을 통해 메인 포트폴리오로 복구해 주십시오.
        </p>
      </div>
      <div className="pt-2">
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 font-sans text-xs font-bold text-white shadow-sm hover:bg-slate-800 transition-all"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>메인 포트폴리오 첫 화면 가기</span>
        </Link>
      </div>
    </div>
  );
}
