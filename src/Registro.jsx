useEffect(() => {
    localStorage.setItem("musica", JSON.stringify(musica));
 }, [musica]);