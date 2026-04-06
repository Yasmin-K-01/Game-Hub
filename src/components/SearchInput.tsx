import { zodResolver } from '@hookform/resolvers/zod'
import { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const schema = z.object({
  search: z
    .string()
    .trim()
    .refine((value) => value.length === 0 || value.length >= 2, {
      message: 'Type at least 2 characters',
    }),
})

type FormValues = z.infer<typeof schema>

type SearchInputProps = {
  value: string
  onSearch: (value: string) => void
}

function SearchInput({ value, onSearch }: SearchInputProps) {
  const inputRef = useRef<HTMLInputElement | null>(null)
  const [draftValue, setDraftValue] = useState(value)
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      search: value,
    },
    mode: 'onChange',
  })

  const registeredField = register('search')

  const submitSearch = handleSubmit(({ search }) => {
    onSearch(search)
  })

  const clearSearch = () => {
    setDraftValue('')
    setValue('search', '')
    onSearch('')
    inputRef.current?.focus()
  }

  return (
    <form className="search-input" onSubmit={submitSearch}>
      <label className="search-input__field">
        <span className="search-input__icon" aria-hidden="true">
          <svg viewBox="0 0 24 24">
            <path d="M10.5 4a6.5 6.5 0 1 0 4.03 11.6l4.44 4.45 1.42-1.42-4.45-4.44A6.5 6.5 0 0 0 10.5 4Z" />
          </svg>
        </span>
        <input
          {...registeredField}
          ref={(element) => {
            registeredField.ref(element)
            inputRef.current = element
          }}
          placeholder="Search games"
          onChange={(event) => {
            setDraftValue(event.target.value)
            registeredField.onChange(event)
            void submitSearch()
          }}
        />
      </label>

      {draftValue ? (
        <button
          className="search-input__clear"
          type="button"
          onClick={clearSearch}
        >
          Clear
        </button>
      ) : null}

      {errors.search ? (
        <span className="search-input__error">{errors.search.message}</span>
      ) : null}
    </form>
  )
}

export default SearchInput
