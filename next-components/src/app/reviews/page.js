import { Dislike } from './components/dislike'
import { Like } from './components/like'

export default function ReviewPage() {
    return <div>
        <h1>Review Page</h1>
        <Like />
        <Dislike/>
    </div>
}