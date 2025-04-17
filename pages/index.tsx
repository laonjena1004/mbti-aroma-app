pages/index.tsx
export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-lime-100 to-green-200 text-center p-8">
      <h1 className="text-3xl font-bold mb-4">🌿 MBTI 아로마 챗봇</h1>
      <p className="text-lg mb-6">당신의 MBTI 성향에 어울리는 향기를 찾아보세요</p>
      <div className="flex flex-col gap-4">
        <a href="/test/simple" className="px-6 py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600">간단 테스트 시작</a>
        <a href="/test/deep" className="px-6 py-3 bg-purple-500 text-white rounded-xl hover:bg-purple-600">심화 테스트 시작</a>
        <a href="/history" className="px-6 py-3 bg-gray-400 text-white rounded-xl hover:bg-gray-500">지난 결과 보기</a>
      </div>
    </div>
  )
}
Commit new file
