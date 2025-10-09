import Button from './components/ui/Button'

function App() {
  const handlePrimaryClick = () => {
    alert('主按鈕已被點擊！')
  }

  const handleSecondaryClick = () => {
    alert('次要按鈕已被點擊！')
  }

  return (
    <div>
      <h1>我的元件庫</h1>
      <Button onClick={handlePrimaryClick}>主要按鈕</Button>
      <Button onClick={handleSecondaryClick} variant="secondary">
        次要按鈕
      </Button>
      <Button onClick={() => {}} disabled={true}>
        禁用按鈕
      </Button>
    </div>
  )
}

export default App
