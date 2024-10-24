// import './App.css'
import {Container,Box, Typography} from "@mui/material"
// import useHabitStore from './stores/store'
import AddHabitForm from "./components/add-habit-form"
import HabitList from "./components/HabitList"
function App() {
// const store = useHabitStore();
// console.log(store)
  return <Container>
    <Box>
      <Typography variant="h2" component="h1"
      gutterBottom align="center"
      >Habit Tracker </Typography>
      <AddHabitForm/>
      <HabitList/>
    </Box>
  </Container>
}

export default App
