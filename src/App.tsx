const App = () => {
  return (
    <>
      <h1>題名</h1>
      <div>
        入力するところ
        <br />
        <button>追加</button>
      </div>
      <div>
        <h2>一覧</h2>
        <dl>
          <dt>件名</dt>
          <dd>内容</dd>
          <button>編集</button>
          <button>削除</button>
        </dl>
      </div>
    </>
  );
};

export default App;
