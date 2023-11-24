useEffect(() => {
    localStorage.setItem("List", JSON.stringify(list));
 }, [list]);