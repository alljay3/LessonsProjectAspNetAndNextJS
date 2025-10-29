﻿namespace BookStore.API.Contracts
{
    public record BooksResponce(
        Guid Id,
        string Title,
        string Description,
        decimal Price);
}
