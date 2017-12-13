package main

import "os"

func main() {
	if len(os.Args) > 1 {
		if os.Args[1] == "react-app" {
			CopyDir("./projects/react-app", "./react-app")
		}
	}
}
