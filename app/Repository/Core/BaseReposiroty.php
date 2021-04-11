<?php

declare(strict_types=1);

namespace App\Repository\Core;

use App\Constants\CodeFailsConstatns;
use App\Repository\Contracts\IBaseRepository;
use App\Repository\Exception\NotEntityDefined;
use Illuminate\Support\Facades\DB;

class BaseReposiroty implements IBaseRepository
{
    protected $entity;

    public function __construct()
    {
        $this->entity = $this->resolvEntity();
    }

    /**
     * @return \Illuminate\Contracts\Foundation\Application|mixed
     * @throws NotEntityDefined
     *
     */
    public function resolvEntity()
    {
        if (!method_exists($this, 'entity')) {
            throw new NotEntityDefined();
        }

        return app($this->entity());
    }

    /**
     * Retrieve all entity data.
     */
    public function getAllColection(): object
    {
        return $this->entity->get();
    }

    /**
     * Retrieve all entity data easy load.
     */
    public function getAllCursor(): object
    {
        return $this->entity->cursor();
    }

    /**
     * Wites a new record to the database.
     *
     * @param array $data : Data to be recorded in the database
     */
    public function store(array $data): ?object
    {
        try {
            DB::beginTransaction();

            $store = $this->entity->create($data);

            DB::commit();

            return $store->refresh();
        } catch (\Exception $e) {
            DB::rollBack();

            throw new \Exception($e->getMessage());
        }
    }

}
