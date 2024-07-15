$(document).ready(function() {
    sayLorem()
})

function sayLorem() {
    const p = $( '<p>')
    // p.html(` Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum deleniti voluptatem odit atque, nisi suscipit provident harum consequatur, reiciendis adipisci, nesciunt sit officiis quam totam quisquam. Ipsa in inventore voluptas.`)

    // $('body').append(p)

    $(`<p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum deleniti voluptatem odit atque, nisi suscipit provident harum consequatur, reiciendis adipisci, nesciunt sit officiis quam totam quisquam. Ipsa in inventore voluptas.</p>`).appendTo('body')
}