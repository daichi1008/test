import { useForm, Controller } from "react-hook-form";
import Container from "@material-ui/core/Container";
import Input from "@material-ui/core/Input"
export default function Home() {
  const { register, handleSubmit, watch, formState: { errors }, control } = useForm()

  const onSubmit = (data) => {
    console.log(data)

  }
  console.log(watch("isLearning"))
  console.log(watch("wasLearning"))
  return (
    <>
      <Container>
        <h1>プログラミング学習に関するアンケート</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="name">Q1.名前を入力してください（匿名可）。</label>
            <Controller
              name="name"
              defaultValue=""
              control={control}
              render={({ field: { value, onChange } }) => <Input value={value} onChange={onChange} />}
            />
          </div>

          <div>
            <label htmlFor="birth">Q2. 生年月日を入力してください。(例： 19900101)</label>
            <Controller
              name="birth"
              defaultValue=""
              control={control}
              rules={{ required: true, pattern: /^[0-9]{8}$/ }}
              render={({ field: { value, onChange } }) => <Input value={value} onChange={onChange} />}
            />
            {
              errors.birth && errors.birth.type === "required" ?
                <span>このフィールドは回答必須です。</span> : null
            }
            {
              errors.birth && errors.birth.type === "pattern" ?
                <span>整数8桁で入力してください。</span> : null
            }
          </div>

          <div>
            <span>Q3. 現在、プログラミングを学習していますか？</span>
            <input
              id="isLearning1"
              defaultValue="true" {...register("isLearning", { required: true })}
              name="isLearning"
              type="radio"
            />
            <label htmlFor="isLearning1">はい</label>

            <input
              id="isLearning2"
              defaultValue="false"{...register("isLearning", { required: true })}
              name="isLearning"
              type="radio"
            />
            <label htmlFor="isLearning2">いいえ</label>

            {
              errors.isLearning &&
              <span>このフィールドは回答必須です。</span>
            }
          </div>

          <div>
            <span>Q4. これまでに、プログラミングを学習したことがありますか？</span>
            <input
              id="wasLearning1"
              defaultValue="true"{...register("wasLearning", { required: true })}
              name="wasLearning"
              type="radio"

            />
            <label htmlFor="wasLearning1">はい</label>

            <input
              id="wasLearning2"
              defaultValue="false"{...register("wasLearning", { required: true })}
              name="wasLearning"
              type="radio"

            />
            <label htmlFor="wasLearning2">いいえ</label>

            {
              errors.wasLearning &&
              <span>このフィールドは回答必須です。</span>
            }
          </div>
          <div>
            {
              watch("isLearning") === "true" || watch("wasLearning") === "true" ?
                <label htmlFor="programLanguage">Q5.今まで学習したことのあるプログラミング言語をすべて教えてください。</label> : null
            } {
              watch("isLearning") === "true" || watch("wasLearning") === "true" ?
                <Controller
                  name="programLanguage"
                  defaultValue=""
                  control={control}
                  render={({ field: { value, onChange } }) => <Input value={value} onChange={onChange} />}
                /> : null

            }

          </div>

          <input type="submit" value="アンケートを提出する" />
        </form>
      </Container>
    </>
  )
}