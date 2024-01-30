const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express()
const port = process.env.PORT||3000
app.listen(port)
const Expense = require('./models/expense');
// const expense = require('./models/expense');
mongoose.connect('mongodb+srv://Sowndar123:Sowndar123@cluster0.9bmne5u.mongodb.net/newDb?retryWrites=true&w=majority',{
  useUnifiedTopology: true
});


  //create methode using postman
//   app.get('/expenses', async (req, res) => {
//     const expenses=await Expense.find();
//     res.send(expenses)
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

//Post method
app.use(express.json());
app.post('/expenses',async(req, res) => {
  console.log(req.body);
  const newExpense=req.body;
  await Expense.create(newExpense);  //importent
  res.send('Create')  
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



/// Put method
// app.use(express.json());
// app.put('/expenses/:id', async (req, res) => {  
//     const id =req.params.id;
//     const update= req.body;
//     const result=await Expense.findByIdAndUpdate(id,{$set: update},{
//       new: true
//     });
//     res.send(result);
//     }
//   )







//delete operations
// app.delete('/expenses/:id', async (req, res) => {
//   try{

  
//   const id =req.params.id;
//   const result=await Expense.findByIdAndDelete(id);
//   if(result)
//       res.send(result)
//   else
//       res.send("no expenses with that id");
//   }catch(err){
//     res.send(err)
//   }

// })

//find id and details

// app.get('/expenses/:id', async (req, res) => {
//   try{

  
//   const id =req.params.id;
//   const result=await Expense.findById(id);
//   if(result)
//       res.send(result)
//   else
//       res.send("no expenses with that id");
//   }catch(err){
//     res.send(err)
//   }

// })

