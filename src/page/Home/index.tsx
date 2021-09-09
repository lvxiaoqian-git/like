import { ReactElement } from "react";

export interface HomeProps {
    location: string
}

export function Home(props: HomeProps): ReactElement {
    console.log(props)
    return <div>
        asd
    </div>

}