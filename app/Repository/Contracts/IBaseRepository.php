<?php

declare(strict_types=1);

namespace App\Repository\Contracts;

interface IBaseRepository
{
    /**
     * Return all data.
     */
    public function getAllColection(): object;

    /**
     * Return all data easy load.
     */
    public function getAllCursor(): object;

    /**
     * @param array $data : Data to be recorded in the database
     */
    public function store(array $data): ?object;

}
