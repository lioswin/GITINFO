// you have all your type here and export them

export type Data = {
    avatar_url: string,
    followers: string | number,
    following: string | number,
    login: string,
    public_repos: string | number
  }

 export type searchProps = {
    onSearch: Function
}

export type UserProps = { 
    src: string,
    username: string
}

export type cardlistProps = {
    data: Data
}