import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'
const supabaseUrl = 'https://rtmudodnjckjoyajbses.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ0bXVkb2RuamNram95YWpic2VzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA4MDE1MjIsImV4cCI6MjAyNjM3NzUyMn0.AS6aoc46SWcFMXmXMjtNdt-oaClM7ylnf4TFu8Tpjwc'
const supabase = createClient(supabaseUrl, supabaseKey)

async function getBooks() {
    let { data: books, error } = await supabase
      .from('books')
      .select('*')

    for (let book of books){
      let bookList = document.getElementById('books');
      bookList.innerHTML += `<td>${book.Title}</td> <td>${book.Author}</td> <td>${book.ISBN}</td>`
    }
  }

getBooks();