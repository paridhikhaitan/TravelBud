const wishlist = [
    {
        "wish" : "Can someone update COGS 101 midterm notes :(",
        "date" : new Date().toLocaleDateString,
    },
    {
        "wish" : "Anatomy of the human body by KAHN",
        "date" : new Date().toLocaleDateString,
    },
    {
        "wish" : "Please send CSE 101 Review notes!!",
        "date" : new Date().toLocaleDateString,
    }
];

localStorage.setItem("wish-items", wishlist);

export default wishlist;