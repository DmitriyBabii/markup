
// Greeting
const userName = prompt("What is your name?")
alert(`Hello ${userName}, how are u doing?`)

// gopni4ek
const userString = prompt("Enter some string")
const userStringResult = userString.split(",").join(", блін ,")
alert(userStringResult)


// capitalize
let str = "cANBerRa"
let result = str[0].toUpperCase() + str.slice(1).toLowerCase()
console.log(result)     //Canberra


// word count
const loremStr = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit at eius ad nam. Possimus eveniet repellendus facilis in omnis, assumenda labore sunt neque molestias a cupiditate expedita eligendi dignissimos sit.
Nemo sed commodi facilis odit maiores veritatis tempora inventore soluta possimus in doloribus voluptatum aliquam veniam quod dolor quam modi culpa, ea eaque mollitia. Aliquam asperiores incidunt itaque rerum nulla!
Dolor sint non tempora, ut nobis animi ducimus praesentium esse qui nisi illo quo saepe sunt a magni, aut dicta, aliquam aspernatur debitis. Nulla quas harum doloremque provident tenetur facere.
Id voluptatum consequuntur sed voluptatibus nulla dignissimos quam animi eos temporibus optio molestiae incidunt non quis ut placeat perspiciatis fuga sequi, tempore necessitatibus! Aliquid exercitationem possimus saepe odit omnis quisquam!
Consectetur dolores laboriosam harum quisquam amet esse est repellendus odit laborum quaerat, velit autem dolorum sapiente ad rerum quae! Blanditiis neque sapiente, qui exercitationem cum tenetur soluta ex ipsam quos?
Soluta corrupti provident totam dolorum saepe. Dolor molestias est itaque, sapiente praesentium sit enim recusandae excepturi? Magnam quia temporibus aut repellendus rem, in molestias nam tenetur quasi, exercitationem, voluptas eos?
Deleniti iusto fuga a impedit, maxime laboriosam dicta dolorum vel consequatur sint ex repellat molestiae deserunt recusandae quae labore ab vitae alias nihil in sit? Voluptatibus iusto atque earum aut?
Perspiciatis corporis earum quia enim? Nemo eum cumque nesciunt maxime ipsa consequatur quasi mollitia id. Numquam amet sint praesentium eum consequuntur ipsa nobis. Fuga tenetur, minus architecto mollitia iusto ipsa!
Nihil fugiat consequuntur laborum facilis voluptates mollitia reprehenderit quidem quia quisquam magni quod nulla debitis alias corporis libero amet, modi quos! Tenetur delectus aliquam porro fuga ex aut eaque commodi!
Eius quas possimus pariatur adipisci iusto eos ab nisi! Soluta laborum suscipit molestias voluptatum harum repudiandae voluptate distinctio quis aut minima molestiae accusantium facilis, sit impedit quisquam est tempore ex!`
console.log(`String: ${loremStr.slice(0, 100) + "..."} has ${loremStr.split(" ").length} words!`)


// credentials
const user = {
    surname: prompt("What is your name?").trim(),
    name: prompt("What is your surneme?").trim(),
    fatherName: prompt("What is your father name?").trim()
}
console.log(
    `User{
Name: ${user.name}
Surname: ${user.surname}
Father name: ${user.fatherName}}`
)

// big tag
str = "якийсь текст у якому є один тег <br /> і всяке інше"
const lookFor = "<br \/>"
let index = str.indexOf(lookFor)
result = str.slice(0, index) + str.slice(index, index + lookFor.length).toUpperCase() + str.slice(index + lookFor.length)
console.log(result)

// new line
const userLine = prompt("Enter your line");
alert(userLine.split("\\n").join("\n"))

// youtube
const link = prompt("Enter youtube link")//"https://www.youtube.com/watch?v=zimgqpJODZk&ab_channel=PUSHUA"
const regex = "(?!=(v=))[a-zA-Z0-9-]+(?=[&|$])"
result = link.match(regex);
if (result) {
    document.write(`<iframe src="https://www.youtube.com/embed/${result[0]}" width="560" height="315" frameborder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`)
}

