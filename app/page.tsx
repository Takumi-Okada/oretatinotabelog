import StoreRow from "./components/StoreRow";

export default function Home() {
  return (
    <main className="min-h-screen w-11/12 mx-auto">
      <div className="w-full flex border-2 border-orange-500 h-14 font-bold rounded-3xl overflow-hidden">
        <div className="w-1/2 flex justify-center items-center border-r-2 border-orange-500 bg-orange-500">
          店
        </div>
        <div className="w-1/2 flex justify-center items-center">
          ユーザー
        </div>
      </div>
      <div className="pt-12">
        <StoreRow rank={1} name={'牡蠣と和牛の奴隷'} evaluation={3.5} />
        <StoreRow rank={2} name={'赤門'} evaluation={3.3} />
        <StoreRow rank={3} name={'マクドナルド'} evaluation={3.2} />
        <StoreRow rank={4} name={'温野菜'} evaluation={2.5} />
        <StoreRow rank={5} name={'牛角'} evaluation={2.3} />
        <StoreRow rank={6} name={'スシロー'} evaluation={1.5} />
      </div>
    </main>
  );
}
